import { StyleSheet, TouchableOpacity, View, Dimensions, TouchableWithoutFeedback } from "react-native";
import { useRouter } from "expo-router";
import { Text } from "react-native-paper";
import { Video, ResizeMode } from "expo-av";
import { TwikklIcon, EIcon } from "@twikkl/configs";
import { ButtonAddSimple } from "@twikkl/components";
import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
import { useLikesHook } from "@twikkl/hooks/likes.hooks";
import { TUser } from "@twikkl/entities/auth.entity";
import FilledLike from "@assets/svg/FilledLike";
import Like from "@assets/svg/Like";
// import { useQuery } from "@tanstack/react-query";
import { s5ClientAuthToken } from "@twikkl/utils/config";

import { bookmarkPost, fetchBookmarks, removeBookmark } from "@twikkl/services/feed.services";
import { useDebouncedCallback } from "use-debounce";
import UserAvatar from "./UserAvatar";

const DEFAULT_CAMERA_ACTION_COLOR = "#FFF";

//get device width and height
const { height } = Dimensions.get("window");

/**
 * TODO - Build Home screen component
 *
 * @constructor
 */

type Props = {
  item: {
    video: string;
    likes: { user: TUser }[];
    _id: string;
    description: string;
    creator: TUser;
  };
  index: number;
  visibleIndex: number;
  onShareClick: any;
  bigView?: boolean;
};

export default function VideoFeedItem({ item, index, visibleIndex, onShareClick, bigView }: Props) {
  const router = useRouter();

  const { toggleLikePost, liked } = useLikesHook(item.likes, item._id);

  // TODO: work on getting post bookmarks
  // const { data } = useQuery(["bookmarks"], () => fetchBookmarks());

  const [bookmarked, setBookMarked] = useState(false);

  const debounceBookmark = useDebouncedCallback(async () => {
    if (!bookmarked) {
      const response = await removeBookmark(item._id);

      return response;
    }

    const response = await bookmarkPost(item._id);
    return response;
  }, 1000);

  const toggleBookmark = async () => {
    setBookMarked(!bookmarked);

    debounceBookmark();
  };

  const icons = () => {
    const options = [
      {
        icon: liked ? FilledLike : Like,
        color: liked ? "red" : DEFAULT_CAMERA_ACTION_COLOR,
        action: () => toggleLikePost(),
      },
      {
        color: DEFAULT_CAMERA_ACTION_COLOR,
        icon: EIcon.THUMB_DOWN,
        action: () => null,
      },
      {
        icon: EIcon.SHARE_NETWORK,
        color: DEFAULT_CAMERA_ACTION_COLOR,
        action: () => onShareClick(),
      },
      {
        icon: EIcon.PIN,
        color: bookmarked ? "red" : DEFAULT_CAMERA_ACTION_COLOR,
        action: () => {
          toggleBookmark();
        },
      },
    ];
    if (bigView)
      options.unshift({
        color: DEFAULT_CAMERA_ACTION_COLOR,
        icon: EIcon.COMMENT,
        action: () => null,
      });
    return options;
  };

  const [shouldPlay, setShouldPlay] = useState(false);

  // const { t } = useTranslation();

  //set play state
  useEffect(() => {
    setShouldPlay(index === visibleIndex);
    // router.push("video/CreateUploadVideo");
  }, [visibleIndex]);

  const togglePlay = () => {
    setShouldPlay(!shouldPlay);
  };

  return (
    <TouchableWithoutFeedback
      onPress={togglePlay}
      style={{ flex: 1, borderWidth: 5, borderColor: "red", borderStyle: "solid" }}
    >
      <View style={{ flex: 1, height }}>
        <Video
          source={{
            uri: `${item.video}?auth_token=${s5ClientAuthToken}`,
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
              {icons().map((icon, index) => (
                <TouchableOpacity
                  onPress={() => icon.action()}
                  key={index}
                  style={{
                    paddingVertical: 12,
                  }}
                >
                  {typeof icon.icon === "string" ? (
                    <TwikklIcon name={icon.icon} size={24} color={icon.color} />
                  ) : (
                    <icon.icon />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
              marginBottom: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <UserAvatar pic={item.creator?.img || ""} name={item.creator.username} />
              <Text variant="titleMedium" style={[styles.headActionText, { width: "75%", marginLeft: 8 }]}>
                @{item.creator.username} {"\n"}
                <Text variant="bodyLarge" style={{ color: DEFAULT_CAMERA_ACTION_COLOR }}>
                  {item.description}
                </Text>
              </Text>
            </View>
            {!bigView && (
              <TouchableOpacity onPress={() => router.push("video/CreateUploadVideo")}>
                <ButtonAddSimple />
              </TouchableOpacity>
            )}
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
