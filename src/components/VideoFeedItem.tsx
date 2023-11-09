import {
  StyleSheet,
  TouchableOpacity,
  View,
  ImagePropsBase,
  Image,
  Dimensions,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import { useRouter } from "expo-router";
import { Text } from "react-native-paper";
import { Video, ResizeMode } from "expo-av";
import { TwikklIcon, EIcon } from "@twikkl/configs";
import { ButtonAddSimple } from "@twikkl/components";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { authEntity } from "@twikkl/entities/auth.entity";
const DEFAULT_CAMERA_ACTION_COLOR = "#FFF";

//get device width and height
const { width, height } = Dimensions.get("window");

/**
 * TODO - Build Home screen component
 *
 * @constructor
 */

const profileImg = require("@assets/imgs/logos/profile.png") as ImagePropsBase["source"];

type Props = {
  item: {
    video: any;
    description: string;
  };
  index: number;
  visibleIndex: number;
  onShareClick: any;
};

export default function VideoFeedItem({ item, index, visibleIndex, onShareClick }: Props) {
  const router = useRouter();
  const icons = [EIcon.HEART, EIcon.THUMB_DOWN, EIcon.SHARE_NETWORK, EIcon.PIN];
  const [shouldPlay, setShouldPlay] = useState(false);
  const { t } = useTranslation();
  const { user } = authEntity.get();
  //set play state
  useEffect(() => {
    setShouldPlay(index === visibleIndex);
    // router.push("video/CreateUploadVideo");
  }, [visibleIndex]);

  const togglePlay = () => {
    setShouldPlay(!shouldPlay);
  };

  return (
    <TouchableWithoutFeedback onPress={() => router.push("video/CreateUploadVideo")} style={{ flex: 1 }}>
      <View style={{ flex: 1, height }}>
        <Video
          source={{
            uri: "https://f5o5.fra2.idrivee2-56.com/s5-public/1/H2XC_V0-dhsr6dBcXx3Vz0LsfvfoAFkt0qYp7PPb-6vj?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=85HZKc2LAsWxgFucKXHo%2F20231104%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231104T163039Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=079f1a7c4333f2085783eba7c4baa48eeea828c86106acfcb4209d7c96263e1f`",

            //  async   downloadAsync() {
            //       return fe
            //     },
            // downloadAsync() {
            //   return `https://s5.cx/s5/blob/uJh9dvBupLgWG3p8CGJ1VR8PLnZvJQedolo8ktb027PrlTT5LvAY?mediaType=video%2Fmp4`;
            // },
          }}
          shouldPlay={shouldPlay}
          isLooping
          resizeMode={ResizeMode.COVER}
          style={[StyleSheet.absoluteFill]}
        />
        <View style={styles.bottomContainer}>
          <View style={styles.rightActionsContainer}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {icons.map((icon, index) => (
                <TouchableOpacity
                  onPress={() => icon === EIcon.SHARE_NETWORK && onShareClick()}
                  key={index}
                  style={{
                    paddingVertical: 12,
                  }}
                >
                  <TwikklIcon name={icon} size={24} color={DEFAULT_CAMERA_ACTION_COLOR} />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 14,
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Image style={styles.profileImg} source={profileImg} />
              <Text variant="titleMedium" style={[styles.headActionText, { width: "75%" }]}>
                @{user?.username} {"\n"}
                <Text variant="bodyLarge" style={{ color: DEFAULT_CAMERA_ACTION_COLOR }}>
                  {item.description}
                </Text>
              </Text>
            </View>
            <TouchableOpacity onPress={() => router.push("video/CreateUploadVideo")}>
              <ButtonAddSimple />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
  bottomContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: "20%",
    justifyContent: "flex-end",
  },
});
