import { View, Text, StyleSheet, Image, Pressable, ScrollView, Linking, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Back from "@assets/svg/Back";
import MoreIcon from "@assets/svg/More";
import Twitter from "@assets/svg/Twitter";
import LiveIcon from "@assets/svg/LiveIcon";
import Play from "@assets/svg/Play";
import PinIcon from "@assets/svg/PinIcon";

import LabelIcon from "@assets/svg/LabelIcon";
// import ImgBgRender from "@twikkl/components/ImgBgRender";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { fetchProfile, userFollowers } from "@twikkl/services/profile.services";
import { authEntity } from "@twikkl/entities/auth.entity";
import AppLoader from "@twikkl/components/AppLoader";
import { fetchUserPost, isUserFeedsResponse } from "@twikkl/services/feed.services";
import ImgBgRender from "@twikkl/components/ImgBgRender";

const iconsArr = [{ Icon: Play }, { Icon: PinIcon }, { Icon: LiveIcon }, { Icon: LabelIcon }];

const Profile = () => {
  const router = useRouter();

  const [active, setActive] = useState(0);

  const { userId } = useLocalSearchParams<{ userId: string }>();

  const { user: loggedInUser } = authEntity.get();

  const user = userId || loggedInUser?._id;

  const { data, isLoading } = useQuery(["user-profile", user], () => fetchProfile(user || ""));

  const { data: followers } = useQuery(["user-followers", user], () => userFollowers(user || ""));

  const { data: userPosts } = useQuery(["user-posts", user], () => fetchUserPost(user || ""));

  const posts = isUserFeedsResponse(userPosts) ? userPosts.data : [];

  if (isLoading) return <AppLoader />;

  const detailsArr = [
    { num: data?.following.length || 0, text: "Followers" },
    { num: followers?.pagination.total || 0, text: "Following" },
    { num: posts.length, text: "Total Twikks" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <Pressable onPress={() => router.push("Home")}>
          <Back dark="#041105" />
        </Pressable>
        <Text style={styles.boldText}>Profile</Text>
        <TouchableOpacity onPress={() => router.push("/settings/Account")}>
          <MoreIcon />
        </TouchableOpacity>
      </View>
      <ScrollView style={{ paddingHorizontal: 10 }}>
        <View style={styles.center}>
          <Image source={{ uri: data?.avatar }} style={styles.profileImg} />
          <Text style={styles.boldTextSpace}>{data?.username}</Text>
          <View style={styles.justifyCenter}>
            {detailsArr.map((item) => (
              <View style={styles.textCenter} key={item.text}>
                <Text>{item.num}</Text>
                <Text style={{ fontWeight: "700", marginTop: 3 }}>{item.text}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.textLight}>{data?.bio || "-"}</Text>
          <View style={styles.flex}>
            <Pressable style={styles.bgGreen}>
              <Text style={styles.textWhite}>Edit Profile</Text>
            </Pressable>
            <Pressable
              style={styles.bgGreen}
              onPress={() => (data?.twitter ? Linking.openURL(`https://twitter.com/${data?.twitter}`) : null)}
            >
              <Twitter />
            </Pressable>
          </View>
        </View>
        <View style={styles.wrapper}>
          {iconsArr.map(({ Icon }, index) => (
            <Pressable
              key={index}
              onPress={() => setActive(index)}
              style={[
                active === index ? styles.bgGreen : { backgroundColor: "transparent" },
                { width: "25%", justifyContent: "center", alignItems: "center" },
              ]}
            >
              <Icon dark={active === index ? "#fff" : "#50A040"} />
            </Pressable>
          ))}
        </View>
        <View style={styles.img}>
          {active === 0 &&
            posts &&
            posts.map((post) => <ImgBgRender key={post._id} img={post.video} likes={post.likes.length} />)}
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    borderRadius: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  profileImg: {
    width: 163,
    height: 163,
    borderRadius: 100,
    backgroundColor: "white",
    marginBottom: 16,
  },
  flex: {
    flexDirection: "row",
    gap: 8,
  },
  center: {
    alignItems: "center",
    marginBottom: 32,
    paddingHorizontal: 20,
  },
  justifyCenter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
  },
  topHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: "5%",
  },
  container: {
    paddingTop: 60,
    backgroundColor: "#F1FCF2",
    flex: 1,
  },
  boldText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  boldTextSpace: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 4,
  },
  textCenter: {
    alignItems: "center",
  },
  textWhite: {
    fontWeight: "700",
    fontSize: 14,
    color: "#F1FCF2",
  },
  textLight: {
    marginBottom: 8,
    marginTop: 16,
    textAlign: "center",
    fontSize: 12,
  },
  bgGreen: {
    paddingVertical: 10,
    height: 38,
    paddingHorizontal: 20,
    backgroundColor: "#50A040",
    borderRadius: 16,
  },
  img: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 38,
  },
});
