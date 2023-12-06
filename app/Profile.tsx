import { View, Text, StyleSheet, Image, Pressable, ScrollView, Linking } from "react-native";
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

const iconsArr = [{ Icon: Play }, { Icon: PinIcon }, { Icon: LiveIcon }, { Icon: LabelIcon }];
// const imgArr = [
//   require("../assets/imgs/prof1.png"),
//   require("../assets/imgs/prof2.png"),
//   require("../assets/imgs/prof3.png"),
//   require("../assets/imgs/prof4.png"),
//   require("../assets/imgs/prof5.png"),
//   require("../assets/imgs/prof6.png"),
// ];

const Profile = () => {
  const router = useRouter();

  const [active, setActive] = useState(0);

  const { userId } = useLocalSearchParams<{ userId: string }>();

  const { user: loggedInUser } = authEntity.get();

  const user = userId || loggedInUser?._id;

  const { data, isLoading } = useQuery(["user-profile", user], () => fetchProfile(user || ""));

  const { data: followers } = useQuery(["user-followers", user], () => userFollowers(user || ""));

  if (isLoading) return <AppLoader />;

  const detailsArr = [
    { num: data?.following.length || 0, text: "Followers" },
    { num: followers?.pagination.total || 0, text: "Following" },
    { num: 0, text: "Total Twikks" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <Pressable onPress={() => router.push("Home")}>
          <Back dark="#041105" />
        </Pressable>
        <Text style={styles.boldText}>Profile</Text>
        <MoreIcon />
      </View>
      <ScrollView style={{ paddingHorizontal: 10 }}>
        <View style={styles.center}>
          <Image source={require("../assets/imgs/profile.png")} />
          <Text style={styles.boldTextSpace}>{data?.username}</Text>
          <View style={styles.justifyCenter}>
            {detailsArr.map((item) => (
              <View style={styles.textCenter}>
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
          {/* To be implemented */}
          {/* {imgArr.map((item, index) => (
            <ImgBgRender key={index} img={item} />
          ))} */}
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
