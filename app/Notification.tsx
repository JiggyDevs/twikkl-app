import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import Back from "@assets/svg/Back";
import NotifCard from "@twikkl/components/NotifCard";
import { useRouter } from "expo-router";

const arr = ["All", "Likes", "Comments", "Mentions", "Following"];

const cardArr = [
  {
    text: "jordiofficial.jgy",
    day: "today",
    time: "Just now",
    action: "Watch",
    avatar: require("../assets/imgs/avatar1.png"),
    desc: "is live streaming: I guess this is a goodbye.",
    like: false,
    img: null,
  },
  {
    text: "sonia.jgy",
    day: "today",
    time: "3mins ago",
    action: "Follow",
    avatar: require("../assets/imgs/avatar2.png"),
    desc: "started following you.",
    like: false,
    img: null,
  },
  {
    text: "lacy.lens",
    day: "today",
    time: "5mins ago",
    action: "",
    img: require("../assets/imgs/notif1.png"),
    desc: "liked your video.",
    avatar: require("../assets/imgs/avatar3.png"),
    like: true,
  },
  {
    text: "deborah.jgy",
    day: "yesterday",
    time: "1 day ago",
    action: "Follow",
    avatar: require("../assets/imgs/avatar4.png"),
    desc: "started following you.",
    like: false,
    img: null,
  },
  {
    text: "maxwell.jgy",
    day: "yesterday",
    time: "1 day ago",
    action: "",
    avatar: require("../assets/imgs/avatar5.png"),
    img: require("../assets/imgs/notif1.png"),
    desc: "liked your video.",
    like: true,
  },
  {
    text: "block_buddy.jgy and spooky.jgy",
    day: "week",
    time: "5 day ago",
    action: "",
    avatar: require("../assets/imgs/avatar8.png"),
    img: require("../assets/imgs/notif2.png"),
    desc: "liked your video.",
    like: true,
  },
  {
    text: "stella.jgy",
    day: "month",
    time: "2 weeks ago",
    action: "",
    avatar: require("../assets/imgs/avatar6.png"),
    img: require("../assets/imgs/notif3.png"),
    desc: "liked your video.",
    like: true,
  },
];
const likes = cardArr.filter((item) => item.desc.includes("liked"));
const comments = cardArr.filter((item) => item.desc.includes("comment"));
const mentions = cardArr.filter((item) => item.desc.includes("mention"));
const following = cardArr.filter((item) => item.desc.includes("following"));

const today = cardArr.filter((item) => item.day === "today");
const yesterday = cardArr.filter((item) => item.day === "yesterday");
const week = cardArr.filter((item) => item.day === "week");
const month = cardArr.filter((item) => item.day === "month");
const likesToday = likes.filter((item) => item.day === "today");
const likesYesterday = likes.filter((item) => item.day === "yesterday");
const likesWeek = likes.filter((item) => item.day === "week");
const likesMonth = likes.filter((item) => item.day === "month");
const commentsToday = comments.filter((item) => item.day === "today");
const commentsYesterday = comments.filter((item) => item.day === "yesterday");
const commentsWeek = comments.filter((item) => item.day === "week");
const commentsMonth = comments.filter((item) => item.day === "month");
const mentionsToday = mentions.filter((item) => item.day === "today");
const mentionsYesterday = mentions.filter((item) => item.day === "yesterday");
const mentionsWeek = mentions.filter((item) => item.day === "week");
const mentionsMonth = mentions.filter((item) => item.day === "month");
const followingToday = following.filter((item) => item.day === "today");

const followingYesterday = following.filter((item) => item.day === "yesterday");
const followingWeek = following.filter((item) => item.day === "week");
const followingMonth = following.filter((item) => item.day === "month");

const Notification = () => {
  const router = useRouter();
  const [active, setActive] = useState("All");
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
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        {active === "All" && (
          <View style={{ flex: 1 }}>
            {cardArr.length === 0 ? (
              <View style={styles.textCenter}>
                <Text style={{ color: "#50A040" }}>You have no notifications yet</Text>
              </View>
            ) : (
              <View>
                {Boolean(today.length) && (
                  <View>
                    <Text style={styles.dayText}>Today</Text>
                    {today.map((item) => (
                      <NotifCard key={item.text} {...item} />
                    ))}
                  </View>
                )}
                {Boolean(yesterday.length) && (
                  <View>
                    <Text style={styles.dayText}>Yesterday</Text>
                    {yesterday.map((item) => (
                      <NotifCard key={item.text} {...item} />
                    ))}
                  </View>
                )}
                {Boolean(week.length) && (
                  <View>
                    <Text style={styles.dayText}>This Week</Text>
                    {week.map((item) => (
                      <NotifCard key={item.text} {...item} />
                    ))}
                  </View>
                )}
                {Boolean(month.length) && (
                  <View>
                    <Text style={styles.dayText}>This Month</Text>
                    {month.map((item) => (
                      <NotifCard key={item.text} {...item} />
                    ))}
                  </View>
                )}
              </View>
            )}
          </View>
        )}
        {active === "Likes" && (
          <View style={{ flex: 1 }}>
            {likes.length === 0 ? (
              <View style={styles.textCenter}>
                <Text style={{ color: "#50A040" }}>You have no ]likes yet</Text>
              </View>
            ) : (
              <View>
                {Boolean(likesToday.length) && (
                  <View>
                    <Text style={styles.dayText}>Today</Text>
                    {likesToday.map((item) => (
                      <NotifCard key={item.text} {...item} />
                    ))}
                  </View>
                )}
                {Boolean(likesYesterday.length) && (
                  <View>
                    <Text style={styles.dayText}>Yesterday</Text>
                    {likesYesterday.map((item) => (
                      <NotifCard key={item.text} {...item} />
                    ))}
                  </View>
                )}
                {Boolean(likesWeek.length) && (
                  <View>
                    <Text style={styles.dayText}>This Week</Text>
                    {likesWeek.map((item) => (
                      <NotifCard key={item.text} {...item} />
                    ))}
                  </View>
                )}
                {Boolean(likesMonth.length) && (
                  <View>
                    <Text style={styles.dayText}>This Month</Text>
                    {likesMonth.map((item) => (
                      <NotifCard key={item.text} {...item} />
                    ))}
                  </View>
                )}
              </View>
            )}
          </View>
        )}
        {active === "Comments" && (
          <View style={{ flex: 1 }}>
            {comments.length === 0 ? (
              <View style={styles.textCenter}>
                <Text style={{ color: "#50A040" }}>You have no comments yet</Text>
              </View>
            ) : (
              <View>
                {Boolean(commentsToday.length) && (
                  <View>
                    <Text style={styles.dayText}>Today</Text>
                    {commentsToday.map((item) => (
                      <NotifCard key={item.text} {...item} />
                    ))}
                  </View>
                )}
                {Boolean(commentsYesterday.length) && (
                  <View>
                    <Text style={styles.dayText}>Yesterday</Text>
                    {commentsYesterday.map((item) => (
                      <NotifCard key={item.text} {...item} />
                    ))}
                  </View>
                )}
                {Boolean(commentsWeek.length) && (
                  <View>
                    <Text style={styles.dayText}>This Week</Text>
                    {commentsWeek.map((item) => (
                      <NotifCard key={item.text} {...item} />
                    ))}
                  </View>
                )}
                {Boolean(commentsMonth.length) && (
                  <View>
                    <Text style={styles.dayText}>This Month</Text>
                    {commentsMonth.map((item) => (
                      <NotifCard key={item.text} {...item} />
                    ))}
                  </View>
                )}
              </View>
            )}
          </View>
        )}
        {active === "Mentions" && (
          <View style={{ flex: 1 }}>
            {mentions.length === 0 ? (
              <View style={styles.textCenter}>
                <Text style={{ color: "#50A040" }}>You have no mentions yet</Text>
              </View>
            ) : (
              <View>
                {Boolean(mentionsToday.length) && (
                  <View>
                    <Text style={styles.dayText}>Today</Text>
                    {mentionsToday.map((item) => (
                      <NotifCard key={item.text} {...item} />
                    ))}
                  </View>
                )}
                {Boolean(mentionsYesterday.length) && (
                  <View>
                    <Text style={styles.dayText}>Yesterday</Text>
                    {mentionsYesterday.map((item) => (
                      <NotifCard key={item.text} {...item} />
                    ))}
                  </View>
                )}
                {Boolean(mentionsWeek.length) && (
                  <View>
                    <Text style={styles.dayText}>This Week</Text>
                    {mentionsWeek.map((item) => (
                      <NotifCard key={item.text} {...item} />
                    ))}
                  </View>
                )}
                {Boolean(mentionsMonth.length) && (
                  <View>
                    <Text style={styles.dayText}>This Month</Text>
                    {mentionsMonth.map((item) => (
                      <NotifCard key={item.text} {...item} />
                    ))}
                  </View>
                )}
              </View>
            )}
          </View>
        )}
        {active === "Following" && (
          <View style={{ flex: 1 }}>
            {following.length === 0 ? (
              <View style={styles.textCenter}>
                <Text style={{ color: "#50A040" }}>You have no following yet</Text>
              </View>
            ) : (
              <View>
                {Boolean(followingToday.length) && (
                  <View>
                    <Text style={styles.dayText}>Today</Text>
                    {followingToday.map((item) => (
                      <NotifCard key={item.text} {...item} />
                    ))}
                  </View>
                )}
                {Boolean(followingYesterday.length) && (
                  <View>
                    <Text style={styles.dayText}>Yesterday</Text>
                    {followingYesterday.map((item) => (
                      <NotifCard key={item.text} {...item} />
                    ))}
                  </View>
                )}
                {Boolean(followingWeek.length) && (
                  <View>
                    <Text style={styles.dayText}>This Week</Text>
                    {followingWeek.map((item) => (
                      <NotifCard key={item.text} {...item} />
                    ))}
                  </View>
                )}
                {Boolean(followingMonth.length) && (
                  <View>
                    <Text style={styles.dayText}>This Month</Text>
                    {followingMonth.map((item) => (
                      <NotifCard key={item.text} {...item} />
                    ))}
                  </View>
                )}
              </View>
            )}
          </View>
        )}
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
