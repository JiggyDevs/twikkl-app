import { useEffect, useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import PinInput from "./KeyboardInputAndHeeaderText";
import KeyboardCancelIcon from "@assets/svg/KeypadCancelIcon";
import { ViewVariant } from "@twikkl/configs";
import Back from "@assets/svg/Back";
import { createWalletPin, isValidWalletPin } from "@twikkl/services/wallet.services";
import { hideLoader, showLoader } from "@twikkl/entities";
import { toastError, toastSuccess } from "@twikkl/utils/common";
import { setPinCreated } from "@twikkl/entities/auth.entity";

const { width } = Dimensions.get("window");
const dialPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "del"];
const dialPadSize = width * 0.17;
const gapY = width * 0.06;
const gapX = width * 0.12;
const alignItems = "center";

function DialPad({ onPress }: { onPress: (item: (typeof dialPad)[number]) => void }) {
  return (
    <FlatList
      numColumns={3}
      data={dialPad}
      columnWrapperStyle={{ gap: gapX }}
      contentContainerStyle={{ gap: gapY, alignItems }}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity disabled={item === ""} onPress={() => onPress(item)}>
            <View
              style={{
                width: dialPadSize,
                height: dialPadSize,
                borderRadius: dialPadSize,
                backgroundColor: item === "" ? "transparent" : "#C0CCC1",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {item === "del" ? (
                <KeyboardCancelIcon />
              ) : (
                <Text style={{ fontSize: 28, fontWeight: "700" }}>{item}</Text>
              )}
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}

const PinKeyboard = ({
  onSuccess,
  closePinModal,
  type = "verify",
}: {
  onSuccess?: Function;
  closePinModal?: Function;
  type?: "create" | "verify";
}) => {
  const [pin, setPin] = useState("");

  const headerText = type === "verify" ? "Enter your PIN" : "Create Your PIN";
  const handlePress = (item: string | number) => {
    if (item === "del") {
      setPin((prevPin) => prevPin.slice(0, -1));
    } else if (pin.length < 4) {
      setPin((prevPin) => prevPin + item);
    }
  };

  const handleBack = () => {
    closePinModal?.();
  };

  const checkPin = async () => {
    if (pin.length !== 4) return;
    showLoader();
    try {
      const data = await isValidWalletPin(pin);
      if (data.data) {
        onSuccess?.();
      } else {
        toastError("Incorrect Pin, please try again");
      }
    } catch (error) {
      console.log({ error });
    } finally {
      hideLoader();
      setPin("");
    }
  };

  const createPin = async () => {
    if (pin.length !== 4) return;
    showLoader();
    try {
      const data = await createWalletPin();
      toastSuccess("Pin Created Successfully");
      onSuccess?.();
      setPinCreated(true);
    } catch (error) {
    } finally {
      hideLoader();
      setPin("");
    }
  };

  useEffect(() => {
    if (pin.length === 4) {
      if (type === "create") {
        createPin();
      } else {
        checkPin();
      }
    }
  }, [pin]);

  return (
    <View style={styles.container}>
      <View style={ViewVariant.wrapper}>
        <Back style={styles.backButton} onPress={() => handleBack()} dark="#041105" />
        <Image style={styles.image} source={require("../../../assets/imgs/logos/smLogo.png")} />
        <View style={{ rowGap: 10 }}>
          <PinInput label={headerText} type="password" value={pin} setValue={setPin} length={4} mt />
          <View style={{ marginTop: 58 }}>
            <DialPad onPress={handlePress} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PinKeyboard;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 10,
  },
  backButton: { padding: 13 },
  image: {
    alignSelf: "center",
    marginBottom: 16,
  },
});
