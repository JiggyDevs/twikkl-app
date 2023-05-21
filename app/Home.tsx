import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Badge } from "react-native-paper";
import { Video, ResizeMode } from "expo-av";
import { ViewVariant, TwikklIcon, EIcon } from "@twikkl/configs";
import { useColors } from "@twikkl/hooks";
import { ButtonAddSimple } from "@twikkl/components";

const DEFAULT_CAMERA_ACTION_COLOR = "#FFF";

/**
 * Home screen component
 *
 * @constructor
 */
export default function ScreenHome() {
  const { primary: colorPrimary } = useColors();

  return (
    <>
      <Video
        source={require("@assets/videos/home-temp.mp4")}
        shouldPlay
        isLooping
        resizeMode={ResizeMode.COVER}
        style={[StyleSheet.absoluteFill]}
      />
      <SafeAreaView style={styles.innerContainer}>
        <View style={ViewVariant.rowSpaceBetween}>
          <TwikklIcon name={EIcon.TIMER_24} size={35} color={DEFAULT_CAMERA_ACTION_COLOR} />
          <View style={ViewVariant.centered}>
            <Text variant="headlineSmall" style={styles.headActionText}>
              My Feed
            </Text>
            <Badge size={12} style={{ ...styles.headActionIndicator, backgroundColor: colorPrimary }} />
          </View>
          <View>
            <Text variant="headlineSmall" style={styles.headActionText}>
              Discover
            </Text>
            <Badge size={12} style={{ ...styles.headActionIndicator, backgroundColor: DEFAULT_CAMERA_ACTION_COLOR }} />
          </View>
          <View>
            <TwikklIcon name={EIcon.BELL} size={35} color={DEFAULT_CAMERA_ACTION_COLOR} />
            <Badge size={12} style={{ backgroundColor: colorPrimary, position: "absolute" }} />
          </View>
        </View>
        <View style={{ justifyContent: "flex-end", flex: 1, marginRight: 10, marginBottom: "20%" }}>
          <View style={styles.rightActionsContainer}>
            <TwikklIcon name={EIcon.HEART} size={35} color={DEFAULT_CAMERA_ACTION_COLOR} />
            <TwikklIcon name={EIcon.THUMB_DOWN} size={35} color={DEFAULT_CAMERA_ACTION_COLOR} />
            <TwikklIcon name={EIcon.SHARE_NETWORK} size={35} color={DEFAULT_CAMERA_ACTION_COLOR} />
            <TwikklIcon name={EIcon.PIN} size={35} color={DEFAULT_CAMERA_ACTION_COLOR} />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text variant="headlineSmall" style={styles.headActionText}>@glory.jgy</Text>
              <ButtonAddSimple />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 10,
    marginHorizontal: 10,
  },
  headActionText: {
    color: DEFAULT_CAMERA_ACTION_COLOR,
  },
  headActionIndicator: {
    flex: 1,
    alignSelf: "center",
    marginTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  rightActionsContainer: {
    flex: 0.3,
    justifyContent: "space-between",
    alignSelf: "flex-end",
    alignItems: "flex-end",
    marginVertical: 10,
  },
});
