import { StyleSheet, ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Badge } from "react-native-paper";
import { ViewVariant, TwikklIcon, EIcon } from "@twikkl/configs";
import { useColors } from "@twikkl/hooks";

const DEFAULT_CAMERA_ACTION_COLOR = "#FFF";

// TODO - homepage
export default function ScreenHome() {

  const {primary: colorPrimary} = useColors();
  
  return (
    <ImageBackground style={ViewVariant.page} source={require("@assets/imgs/temp/home.jpg")} resizeMode="cover">
      <SafeAreaView style={styles.innerContainer}>
        <View style={ViewVariant.rowSpaceBetween}>
          <TwikklIcon name={EIcon.TIMER_24} size={35} color={DEFAULT_CAMERA_ACTION_COLOR} />
          <View style={ViewVariant.centered}>
            <Text variant="headlineSmall" style={styles.headOptionText}>
              My Feed
            </Text>
            <Badge size={12} style={{ ...styles.headOptionIndicator, backgroundColor: colorPrimary }} />
          </View>
          <View>
            <Text variant="headlineSmall" style={styles.headOptionText}>
              Discover
            </Text>
            <Badge size={12} style={{ ...styles.headOptionIndicator, backgroundColor: DEFAULT_CAMERA_ACTION_COLOR }} />
          </View>
          <View>
            <TwikklIcon name={EIcon.BELL} size={35} color={DEFAULT_CAMERA_ACTION_COLOR} />
            <Badge size={12} style={{ backgroundColor: colorPrimary, position: "absolute"}} />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    paddingTop: 10,
    marginHorizontal: 10,
  },
  headOptionText: {
    color: DEFAULT_CAMERA_ACTION_COLOR,
  },
  headOptionIndicator: {
    flex: 1,
    alignSelf: "center",
    marginTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
});
