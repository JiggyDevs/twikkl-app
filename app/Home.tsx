import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Badge, Button } from "react-native-paper";
import { ViewVariant, TwikklIcon, EIcon } from "@twikkl/configs";
import { useColors } from "@twikkl/hooks";
import VideoFeedItem from "@twikkl/components/VideoFeedItem";
import { useCallback, useEffect, useState } from "react";
import BottomNav from "@twikkl/components/BottomNav";
import { useTranslation } from "react-i18next";
import { useFocusEffect, useNavigation, useRouter } from "expo-router";
import AppBottomSheet from "@twikkl/components/BottomSheet";
import { useFeedHook } from "@twikkl/hooks/feed.hooks";
import AppLoader from "@twikkl/components/AppLoader";
import Share from "@twikkl/components/Share";
import Comment from "@twikkl/components/Comment";
import { setTokenDefault } from "@twikkl/entities/tokenNft.entity";

const DEFAULT_CAMERA_ACTION_COLOR = "#FFF";
const BACKGROUND_COLOR = "#041105";

//get device width and height
const { height } = Dimensions.get("window");

/**
 * TODO - Horizontal pager
 *
 * @constructor
 */

export default function ScreenHome() {
  const router = useRouter();
  const { primary: colorPrimary } = useColors();
  const [shareVisible, setShareVisible] = useState(false);
  const [comment, setComment] = useState(false);

  const { isLoading, posts, refetch, pageMeta, page, setPage, postsData } = useFeedHook();

  const { t } = useTranslation();
  const [visibleIndex, setVisibleIndex] = useState<number>(0);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffset = event.nativeEvent.contentOffset.y;
    const index = Math.floor(contentOffset / height);
    setVisibleIndex(index);
  };

  const handleEndReached = (info: any) => {
    if (isLoading) return;
    if (page < pageMeta.lastPage) {
      setPage((currentPage) => currentPage + 1);
    }
  };

  const visiblePost = posts[visibleIndex];

  // console.log("====================================");
  // console.log(posts);
  // console.log("====================================");

  useEffect(() => {
    refetch();
    setTokenDefault();
  }, []);

  if (isLoading) {
    return <AppLoader />;
  }

  return (
    <>
      {posts.length ? (
        <FlatList
          style={[StyleSheet.absoluteFill]}
          data={postsData}
          renderItem={({ item, index }) => (
            <VideoFeedItem
              item={item}
              index={index}
              visibleIndex={visibleIndex}
              onShareClick={() => setShareVisible(true)}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          pagingEnabled
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          onEndReached={handleEndReached}
        />
      ) : null}
      <SafeAreaView style={styles.innerContainer}>
        <View style={ViewVariant.rowSpaceBetween}>
          <Pressable onPress={() => router.push("votes")}>
            <TwikklIcon name={EIcon.TIMER_24} size={24} color={DEFAULT_CAMERA_ACTION_COLOR} />
          </Pressable>
          <View style={ViewVariant.centered}>
            <Text variant="titleMedium" style={styles.headActionText}>
              {t("My Feed")}
            </Text>
            <Badge size={10} style={{ ...styles.headActionIndicator, backgroundColor: colorPrimary }} />
          </View>
          <Pressable onPress={() => router.push("Discover")}>
            <Text variant="titleMedium" style={styles.headActionText}>
              {t("Discover")}
            </Text>
            <Badge size={10} style={{ ...styles.headActionIndicator, backgroundColor: DEFAULT_CAMERA_ACTION_COLOR }} />
          </Pressable>
          <Pressable onPress={() => router.push("Notification")}>
            <TwikklIcon name={EIcon.BELL} size={24} color={DEFAULT_CAMERA_ACTION_COLOR} />
            <Badge size={10} style={{ backgroundColor: colorPrimary, position: "absolute" }} />
          </Pressable>
        </View>
      </SafeAreaView>
      {!posts.length && (
        <View style={{ flex: 1, backgroundColor: "black" }}>
          <View style={styles.placeholder}>
            <Text variant="titleMedium" style={styles.placeholderText}>
              No posts yet.
            </Text>
            <Button onPress={() => router.push("video/CreateUploadVideo")}>Upload</Button>
          </View>
        </View>
      )}
      <BottomNav setComment={setComment} commentCount={visiblePost?.totalComments || 0} />
      {shareVisible && (
        <AppBottomSheet backgroundColor={BACKGROUND_COLOR} height="50%" closeModal={() => setShareVisible(false)}>
          <Share />
        </AppBottomSheet>
      )}
      {posts.length > 0 && comment && (
        <AppBottomSheet backgroundColor="#000" height="80%" closeModal={() => setComment(false)}>
          <Comment
            setComment={setComment}
            comments={visiblePost.comments}
            postId={visiblePost._id}
            newComment={() => {
              refetch();
            }}
          />
        </AppBottomSheet>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    paddingTop: 10,
    paddingHorizontal: 14,
    // backgroundColor: "black",
  },
  headActionText: {
    color: DEFAULT_CAMERA_ACTION_COLOR,
    fontWeight: "600",
  },
  placeholder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderText: {
    color: "#fff",
    fontWeight: "600",
  },
  headActionIndicator: {
    alignSelf: "center",
    marginTop: 0,
    paddingHorizontal: 10,
    paddingVertical: 3,
    height: 5,
  },
  // rightActionsContainer: {
  //   justifyContent: "space-between",
  //   alignSelf: "flex-end",
  //   alignItems: "flex-end",
  //   marginVertical: 10,
  //   paddingRight: 5,
  // },
  // profileImg: {
  //   width: 40,
  //   height: 40,
  //   borderRadius: 20,
  //   marginRight: 10,
  //   borderWidth: 1,
  //   borderColor: "#FFF",
  // },
  // bottomContainer: {
  //   position: "absolute",
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   paddingBottom: 10,
  //   paddingHorizontal: 14,
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  // },
  // tabText: {
  //   color: "#FFF",
  //   fontSize: 12,
  // },
  // tabContainer: {
  //   alignItems: "center",
  // },
});
