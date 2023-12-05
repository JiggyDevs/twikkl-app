import { View, Text, StyleSheet, Pressable, ScrollView, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import React, { useState } from "react";
import Back from "@assets/svg/Back";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";
import advancedFormat from "dayjs/plugin/advancedFormat";
import NotifCard from "@twikkl/components/NotifCard";
import { useRouter } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { authEntity } from "@twikkl/entities/auth.entity";
import { NotificationResponse, userNotifications } from "@twikkl/services/notification.services";
import AppLoader from "@twikkl/components/AppLoader";
import dayjs from "dayjs";

const arr = ["All", "Likes", "Comments", "Mentions", "Following"];

dayjs.extend(isToday);
dayjs.extend(isYesterday);
dayjs.extend(advancedFormat);

const Notification = () => {
  const router = useRouter();

  const [active, setActive] = useState("All");

  const { user } = authEntity.get();

  const [page] = useState(1);

  const [pageSize, setPageSize] = useState(1);

  const { data, isLoading } = useQuery(["notifications", user?._id, pageSize], () =>
    userNotifications(user?._id || "", page, pageSize),
  );

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isEndReached = layoutMeasurement.height + contentOffset.y >= contentSize.height;

    if (isEndReached) {
      if (!isLoading && (data?.pagination.total || 0) > pageSize) {
        setPageSize((prev) => prev + 10);
      }
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

  const notifications = data.data;

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

  const computeDate = (date: string) => {
    const day = dayjs(date);

    if (day.isToday()) return "Today";

    if (day.isYesterday()) return "Yesterday";

    return day.format("Do MMM YYYY");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <Pressable onPress={() => router.push("Home")}>
          <Back dark="#041105" />
        </Pressable>
        <Text style={styles.boldText}>Notifications</Text>
        <View style={{ width: 20 }} />
      </View>
      <View style={styles.wrapper}>
        <ScrollView contentContainerStyle={{ alignItems: "center" }} showsHorizontalScrollIndicator={false} horizontal>
          {arr.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => setActive(item)}
              style={[active === item ? styles.bgGreen : { backgroundColor: "transparent" }, { paddingHorizontal: 20 }]}
            >
              <Text style={{ color: active === item ? "#fff" : "#000" }}>{item}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
      <ScrollView contentContainerStyle={{ flex: 1 }} onScroll={handleScroll}>
        <View style={{ flex: 1 }}>
          {Array.from(getActive()).map(([key, value]) => (
            <View key={key}>
              <Text style={styles.dayText}>{computeDate(key)}</Text>

              {value.length ? (
                value.map((item) => (
                  <NotifCard key={item._id} text={item.title} desc={item.content} avatar={""} action="View" />
                ))
              ) : (
                <View style={styles.textCenter}>
                  <Text style={{ color: "#50A040" }}>You have no notifications yet</Text>
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
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
    fontSize: 12,
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
