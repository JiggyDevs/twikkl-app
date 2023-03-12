import { StyleSheet, ImageBackground, View } from "react-native";
import { CommonViewStyles, TwikklIcon } from "@twikkl/configs";
import { SafeAreaView } from "react-native-safe-area-context";

const DEFAULT_CAMERA_ACTION_COLOR = "#FFF";

// TODO - homepage
export default function ScreenHome() {
  return (
    <ImageBackground
      style={[CommonViewStyles.page, CommonViewStyles.centered, {justifyContent: "flex-start"}]}
      resizeMode="cover"
      source={require("@assets/imgs/temp/home.jpg")}
    >
      <SafeAreaView>
      <View style={{flexDirection:"row"}}>
        <TwikklIcon name="fluentui-timer-24" size={25} color={DEFAULT_CAMERA_ACTION_COLOR}/>
      </View>
      </SafeAreaView>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
