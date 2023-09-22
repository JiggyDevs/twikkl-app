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
import { Text, Badge } from "react-native-paper";
import { ViewVariant, TwikklIcon, EIcon } from "@twikkl/configs";
import { useColors } from "@twikkl/hooks";
import VideoFeedItem from "@twikkl/components/VideoFeedItem";
import { useRef, useState } from "react";
import videos from "@twikkl/staticFiles/videos";
import BottomNav from "@twikkl/components/BottomNav";
import { useTranslation } from "react-i18next";
import { useRouter } from "expo-router";
import AppBottomSheet from "@twikkl/components/BottomSheet";
import { useQuery } from "@tanstack/react-query";
import { fetchUserFeeds } from "@twikkl/services/feed.services";
import { color } from "react-native-reanimated";
import Share from "@twikkl/components/Share";

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

  const { data } = useQuery(["user-feed"], () => fetchUserFeeds());

  console.log(data);
  // get static videos
  const items = videos;

  const { t } = useTranslation();
  const [visibleIndex, setVisibleIndex] = useState<number>(0);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffset = event.nativeEvent.contentOffset.y;
    const index = Math.floor(contentOffset / height);

    setVisibleIndex(index);
  };

  return (
    <>
      <FlatList
        style={[StyleSheet.absoluteFill]}
        data={items}
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
      />
      <SafeAreaView style={styles.innerContainer}>
        <View style={ViewVariant.rowSpaceBetween}>
          <TwikklIcon name={EIcon.TIMER_24} size={24} color={DEFAULT_CAMERA_ACTION_COLOR} />
          <View style={ViewVariant.centered}>
            <Text variant="titleMedium" style={styles.headActionText}>
              {t("home.myFeed")}
            </Text>
            <Badge size={10} style={{ ...styles.headActionIndicator, backgroundColor: colorPrimary }} />
          </View>
          <Pressable onPress={() => router.push("Discover")}>
            <Text variant="titleMedium" style={styles.headActionText}>
              {t("home.discover")}
            </Text>
            <Badge size={10} style={{ ...styles.headActionIndicator, backgroundColor: DEFAULT_CAMERA_ACTION_COLOR }} />
          </Pressable>
          <Pressable onPress={() => router.push("Notification")}>
            <TwikklIcon name={EIcon.BELL} size={24} color={DEFAULT_CAMERA_ACTION_COLOR} />
            <Badge size={10} style={{ backgroundColor: colorPrimary, position: "absolute" }} />
          </Pressable>
        </View>
      </SafeAreaView>

      <BottomNav commentCount={0} />
      {shareVisible && (
        <AppBottomSheet backgroundColor={BACKGROUND_COLOR} height="50%" closeModal={() => setShareVisible(false)}>
          <Share />
        </AppBottomSheet>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    paddingTop: 10,
    marginHorizontal: 14,
  },
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
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 10,
    paddingHorizontal: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tabText: {
    color: "#FFF",
    fontSize: 12,
  },
  tabContainer: {
    alignItems: "center",
  },
});
