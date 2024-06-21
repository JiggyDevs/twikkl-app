import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Back from "@assets/svg/Back";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";
import advancedFormat from "dayjs/plugin/advancedFormat";
import NotifCard from "@twikkl/components/NotifCard";
import { useRouter } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { TUser, authEntity } from "@twikkl/entities/auth.entity";
import { NotificationResponse, markNotification, userNotifications } from "@twikkl/services/notification.services";
import AppLoader from "@twikkl/components/AppLoader";
import dayjs from "dayjs";
import BigView from "@twikkl/components/Discover/BigView";
import { useNotification } from "@twikkl/hooks/notification.hooks";
import { Post } from "@twikkl/services/feed.services";

const arr = ["All", "Likes", "Comments", "Mentions", "Following"];

dayjs.extend(isToday);
dayjs.extend(isYesterday);
dayjs.extend(advancedFormat);

const Notification = () => {
  const router = useRouter();
  const [active, setActive] = useState("All");
  const [viewNotification, setViewNotification] = useState<[number, number] | null>(null);

  const {
    action: { refetch, loadMore },
    state: { notifications: data, isLoading },
  } = useNotification();

  const handleMarkNotification = async (notificationId: string) => {
    const response = await markNotification(notificationId);
    if (response) {
      refetch();
    }
  };

  const organizeDataByDate = (data: NotificationResponse[]): Map<string, NotificationResponse[]> => {
    const dataByDate = new Map();
    data.forEach((item) => {
      const dateKey = dayjs(item.createdAt).format("YYYY-MM-DD");
      if (!dataByDate.has(dateKey)) {
        dataByDate.set(dateKey, []);
      }
      dataByDate.get(dateKey).push(item);
    });
    return dataByDate;
  };

  const computeDate = (date: string) => {
    const day = dayjs(date);
    if (day.isToday()) return "Today";
    if (day.isYesterday()) return "Yesterday";
    return day.format("Do MMM YYYY");
  };

  if (isLoading) {
    return <AppLoader />;
  }

  if (!data) {
    return (
      <>
        <View style={styles.textCenter}>
          <Text style={{ color: "#50A040" }}>You have no notifications yet</Text>
        </View>
      </>
    );
  }

  const notifications = data;
  // Assuming `data` is an array of Notification objects
  const dataByDate = organizeDataByDate(notifications);

  const filterNotifications = (data: NotificationResponse[], type: string) => data.filter((item) => item.type === type);

  const likes = organizeDataByDate(filterNotifications(notifications, "likes"));

  const comments = organizeDataByDate(filterNotifications(notifications, "comments"));
  const mentions = organizeDataByDate(filterNotifications(notifications, "mentions"));
  const following = organizeDataByDate(filterNotifications(notifications, "following"));

  const getActive = () => {
    if (active === "Likes") return likes;
    if (active === "Comments") return comments;
    if (active === "Mentions") return mentions;
    if (active === "Following") return following;
    return dataByDate;
  };

  const allNotifications = Array.from(getActive());

  if (viewNotification) {
    const getNotificationsFromAll = allNotifications[viewNotification[0]][1];
    const postToShow = getNotificationsFromAll[viewNotification[1]];
    return (
      <BigView
        setBigView={() => setViewNotification(null)}
        post={{
          ...(postToShow.post as Post),
          creator: {
            avatar: postToShow.user.avatar,
            username: postToShow.user.username,
          },
        }}
        refetchComments={refetch}
      />
    );
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.topHeader}>
          <Pressable onPress={() => router.push("Home")}>
            <Back dark="#041105" />
          </Pressable>
          <Text style={styles.boldText}>Notifications</Text>
          <View style={{ width: 20 }} />
        </View>
        <View style={styles.wrapper}>
          <ScrollView
            contentContainerStyle={{ alignItems: "center" }}
            showsHorizontalScrollIndicator={false}
            horizontal
          >
            {arr.map((item, index) => (
              <Pressable
                key={index}
                onPress={() => setActive(item)}
                style={[
                  active === item ? styles.bgGreen : { backgroundColor: "transparent" },
                  { paddingHorizontal: 20 },
                ]}
              >
                <Text style={{ color: active === item ? "#fff" : "#000" }}>{item}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        <View style={{ flex: 1, gap: 15 }}>
          <FlatList
            data={Array.from(getActive())}
            renderItem={({ item: [key, value], index: idx }) => (
              <View>
                <Text style={styles.dayText}>{computeDate(key)}</Text>
                {value.length ? (
                  value.map((item: any, index: number) => {
                    console.log("====================================");
                    console.log(item);
                    console.log("====================================");
                    return (
                      <NotifCard
                        key={item._id}
                        text={item.title}
                        handleView={() => {
                          if (item.post) setViewNotification([idx, index]);
                          handleMarkNotification(item._id);
                        }}
                        time={(dayjs(item.createdAt) as any).fromNow()}
                        type={item.type}
                        desc={item.content}
                        avatar={item.user.avatar}
                        userId={item.user._id}
                        name={item.user.name || item.user.username}
                        action={item.post ? "View" : undefined}
                      />
                    );
                  })
                ) : (
                  <View style={styles.textCenter}>
                    <Text style={{ color: "#50A040" }}>You have no notifications yet</Text>
                  </View>
                )}
              </View>
            )}
            keyExtractor={([key], index) => `${active}_${index.toString()}_${key}`}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            // onScroll={onScroll}
            onEndReached={() => loadMore()}
            onEndReachedThreshold={0.5}
          />
        </View>
      </View>
    </>
  );
};

export default Notification;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 16,
    marginBottom: 23,
  },
  dayText: {
    fontWeight: "700",
    fontSize: 14,
    marginBottom: 10,
  },
  topHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    paddingTop: 60,
    paddingHorizontal: 10,
    backgroundColor: "#F1FCF2",
    flex: 1,
  },
  boldText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bgGreen: {
    padding: 10,
    backgroundColor: "#50A040",
    borderRadius: 16,
  },
});
