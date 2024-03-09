import { StyleSheet, TouchableOpacity, View, Dimensions, TouchableWithoutFeedback } from "react-native";
import { useRouter } from "expo-router";
import { Text } from "react-native-paper";
import { Video, ResizeMode } from "expo-av";
import { TwikklIcon, EIcon } from "@twikkl/configs";
import { ButtonAddSimple } from "@twikkl/components";
import { useCallback, useEffect, useRef, useState } from "react";
// import { useTranslation } from "react-i18next";
import { useLikesHook } from "@twikkl/hooks/likes.hooks";
import { TUser } from "@twikkl/entities/auth.entity";
import FilledLike from "@assets/svg/FilledLike";
import Like from "@assets/svg/Like";
// import { useQuery } from "@tanstack/react-query";
import { s5ClientAuthToken } from "@twikkl/utils/config";

import { TComment, bookmarkPost, fetchBookmarks, removeBookmark } from "@twikkl/services/feed.services";
import { useDebouncedCallback } from "use-debounce";
import UserAvatar from "./UserAvatar";

import AppLoader from "./AppLoader";
import AppBottomSheet from "./BottomSheet";
import Comment from "./Comment";
import { useQuery } from "@tanstack/react-query";
import PlayIcon from "@assets/svg/PlayIcon";
import PauseIcon from "@assets/svg/PauseIcon";

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
    comments: TComment[];
    totalLikes: number;
    totalComments: number;
    video: string;
    likes: { user: TUser }[];
    _id: string;
    description: string;
    creator: TUser;
  };
  index: number;
  visibleIndex: number;
  onShareClick: any;
  refetchComments?: () => void;
  bigView?: boolean;
};

export default function VideoFeedItem({ item, index, visibleIndex, onShareClick, bigView, refetchComments }: Props) {
  const router = useRouter();

  const { toggleLikePost, liked } = useLikesHook(item.likes, item._id);

  // TODO: work on getting post bookmarks
  useQuery(["bookmarks"], () => getUserBookmarks());

  const getUserBookmarks = useCallback(async () => {
    const response = await fetchBookmarks();
    if (response) {
      const isPostBookmarked = response?.data.find((bookmark) => bookmark.post === item._id);
      if (isPostBookmarked) setBookMarked(true);
      return response;
    }
    return null;
  }, [item._id]);

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
        text: item.totalLikes,
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
        action: () => setComment(true),
      });
    return options;
  };

  const [shouldPlay, setShouldPlay] = useState(true);
  const [showPausePlay, setShowPausePlay] = useState(false);

  const [loading, setLoading] = useState(true);

  // const { t } = useTranslation();

  //set play state
  useEffect(() => {
    setShouldPlay(index === visibleIndex);
    // router.push("video/CreateUploadVideo");
  }, [visibleIndex]);

  const [comment, setComment] = useState(false);

  const togglePlay = () => {
    setShouldPlay(!shouldPlay);
  };

  useEffect(() => {
    setShowPausePlay(true);
    setTimeout(() => {
      setShowPausePlay(false);
    }, 2000);
  }, [shouldPlay]);

  return (
    <>
      <TouchableWithoutFeedback
        onPress={togglePlay}
        style={{ flex: 1, borderWidth: 5, borderColor: "red", borderStyle: "solid" }}
      >
        <View style={{ flex: 1, height, alignItems: "center", justifyContent: "center" }}>
          <Video
            source={{
              uri: `${item.video}?auth_token=${s5ClientAuthToken}`,
            }}
            shouldPlay={shouldPlay}
            onLoad={() => {
              setLoading(false);
            }}
            onError={() => {
              setLoading(false);
            }}
            isLooping
            resizeMode={ResizeMode.COVER}
            style={[StyleSheet.absoluteFill]}
          />

          {loading && <AppLoader />}
          <View style={{ position: "absolute", zIndex: 100, opacity: showPausePlay ? 1 : 0 }}>
            {shouldPlay ? <PauseIcon /> : <PlayIcon />}
          </View>

          <View style={[styles.bottomContainer, { marginBottom: bigView ? "10%" : "23%" }]}>
            <View
              style={{
                flexDirection: "row",
                gap: 15,
              }}
            >
              <UserAvatar pic={item.creator?.avatar || ""} name={item.creator.username} userId={item.creator._id} />
              <View style={{ width: "75%" }}>
                <Text style={styles.headActionText}>@{item.creator.username}</Text>
                <Text variant="bodyMedium" style={{ color: DEFAULT_CAMERA_ACTION_COLOR }}>
                  {item.description}
                </Text>
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
                gap: 20,
              }}
            >
              {icons().map((icon, index) => (
                <View key={index} style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
                  {Boolean(icon?.text) && <Text style={{ color: "#50A040" }}>{icon.text}</Text>}
                  <TouchableOpacity onPress={() => icon.action()}>
                    {typeof icon.icon === "string" ? (
                      <TwikklIcon name={icon.icon} size={24} color={icon.color} />
                    ) : (
                      <icon.icon />
                    )}
                  </TouchableOpacity>
                </View>
              ))}
              {!bigView && (
                <TouchableOpacity onPress={() => router.push("video/CreateUploadVideo")}>
                  <ButtonAddSimple />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      {comment && (
        <AppBottomSheet backgroundColor="#000" height="80%" closeModal={() => setComment(false)}>
          <Comment
            setComment={setComment}
            comments={item.comments}
            postId={item._id}
            newComment={(comment) => {
              refetchComments && refetchComments();
            }}
          />
        </AppBottomSheet>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  headActionText: {
    color: DEFAULT_CAMERA_ACTION_COLOR,
    fontWeight: "600",
    fontSize: 18,
  },
  headActionIndicator: {
    alignSelf: "center",
    marginTop: 0,
    paddingHorizontal: 10,
    paddingVertical: 3,
    height: 5,
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
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: "23%",
    paddingHorizontal: 10,
  },
});
