import Back from "@assets/svg/Back";
import ButtonEl from "@twikkl/components/ButtonEl";
import KeyboardAvoidView from "@twikkl/components/KeyboardAvoidView";
import { ViewVariant } from "@twikkl/configs";
import { ReactElement } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

type IProps = {
  title: string;
  desc: string;
  children: ReactElement;
  btnText: string;
  onPress: Function;
  disabled?: boolean;
  handleBack: Function;
  loading?: boolean;
  verify?: string;
};

const AuthLayout = ({ title, desc, children, btnText, onPress, disabled, handleBack, loading, verify }: IProps) => {
  return (
    <View>
      <KeyboardAvoidView>
        <>
          <Back style={styles.backButton} onPress={() => handleBack()} dark="#041105" />
          <Image style={styles.image} source={require("../../assets/imgs/logos/smLogo.png")} />
          <View style={{ marginBottom: 24 }}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>{desc}</Text>
            {verify && <Text style={styles.email}>{verify}</Text>}
            <View style={styles.children}>{children}</View>
            <ButtonEl loading={loading} disabled={disabled} onPress={() => onPress()}>
              <Text style={[ViewVariant.buttonText, disabled && { color: "#000" }]}>{btnText}</Text>
            </ButtonEl>
          </View>
        </>
      </KeyboardAvoidView>
    </View>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  children: {
    marginTop: 24,
    marginBottom: 50,
    zIndex: 10,
  },
  title: {
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 33,
    textAlign: "center",
  },
  desc: {
    fontWeight: "500",
    textAlign: "center",
  },
  image: {
    alignSelf: "center",
    marginBottom: 16,
  },
  email: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
    marginTop: 4,
  },
  backButton: { padding: 13 },
});
