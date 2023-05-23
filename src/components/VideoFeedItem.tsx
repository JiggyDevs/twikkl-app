import { StyleSheet, TouchableOpacity, View, ImagePropsBase, Image, Dimensions } from "react-native";
import { Text, Badge } from "react-native-paper";
import { Video, ResizeMode } from "expo-av";
import { ViewVariant, TwikklIcon, EIcon } from "@twikkl/configs";
import { useColors } from "@twikkl/hooks";
import { ButtonAddSimple } from "@twikkl/components";

const DEFAULT_CAMERA_ACTION_COLOR = "#FFF";

//get device width and height
const { width, height } = Dimensions.get("window");

/**
 * TODO - Build Home screen component
 *
 * @constructor
 */

const profileImg = require("@assets/imgs/logos/profile.png") as ImagePropsBase["source"];


export default function VideoFeedItem() {
  const icons = [EIcon.HEART, EIcon.THUMB_DOWN, EIcon.SHARE_NETWORK, EIcon.PIN]

  return (
    <View style={{ flex: 1, height: height + 49.5 }}>
            <Video
              source={require("@assets/videos/home-temp.mp4")}
              shouldPlay
              isLooping
              resizeMode={ResizeMode.COVER}
              style={[StyleSheet.absoluteFill]}
            />
            <View style={{
              flex: 1,
              marginHorizontal: 10,
              marginBottom: "20%",
              justifyContent: "flex-end",
            }}>
              <View style={styles.rightActionsContainer}>
                <View style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                  {
                    icons.map((icon, index) =>
                      <TouchableOpacity key={index}
                        style={{
                          paddingVertical: 12,
                        }}>
                        <TwikklIcon name={icon} size={24} color={DEFAULT_CAMERA_ACTION_COLOR} />
                      </TouchableOpacity>
                    )
                  }

                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 14,
                }}
              >
                <View style={{
                  flexDirection: "row",
                }}>
                  <Image style={styles.profileImg} source={profileImg} />
                  <Text variant="titleMedium" style={[styles.headActionText, { width: '75%', }]}>
                    @glory.jgy {'\n'}
                    <Text variant="bodyLarge" style={{ color: DEFAULT_CAMERA_ACTION_COLOR }}>
                      My very first podcast, it was really fun and I learnt so much just in one day.
                    </Text>
                  </Text>
                </View>
                <TouchableOpacity style={{
                }}>
                  <ButtonAddSimple />
                </TouchableOpacity>
              </View>
            </View>
          </View>
  );
}

const styles = StyleSheet.create({
  headActionText: {
    color: DEFAULT_CAMERA_ACTION_COLOR,
    fontWeight: "600",
  },
  headActionIndicator: {
    alignSelf: "center",
    marginTop: 0,
    paddingHorizontal: 10,
    paddingVertical: 3,
    height: 5,
  },
  rightActionsContainer: {
    justifyContent: "space-between",
    alignSelf: "flex-end",
    alignItems: "flex-end",
    marginVertical: 10,
    paddingRight: 5,
  },
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#FFF",
  },
});
