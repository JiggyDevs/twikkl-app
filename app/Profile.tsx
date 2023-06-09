import { View, Text, StyleSheet, Image, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import Back from "@assets/svg/Back";
import MoreIcon from "@assets/svg/More";
import Twitter from "@assets/svg/Twitter";
import LiveIcon from "@assets/svg/LiveIcon";
import Play from "@assets/svg/Play";
import PinIcon from "@assets/svg/PinIcon";
import LabelIcon from "@assets/svg/LabelIcon";
import ImgBgRender from "@twikkl/components/ImgBgRender";
import { useRouter } from "expo-router";

const detailsArr = [
  { num: "4.5K", text: "Followers" },
  { num: "2K", text: "Following" },
  { num: "240K", text: "Total Twikks" },
];
const iconsArr = [{ Icon: Play }, { Icon: PinIcon }, { Icon: LiveIcon }, { Icon: LabelIcon }];
const imgArr = [
  require("../assets/imgs/prof1.png"),
  require("../assets/imgs/prof2.png"),
  require("../assets/imgs/prof3.png"),
  require("../assets/imgs/prof4.png"),
  require("../assets/imgs/prof5.png"),
  require("../assets/imgs/prof6.png"),
];

const Profile = () => {
  const router = useRouter();
  const [active, setActive] = useState(0);
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
          <Text style={styles.boldTextSpace}>jerry.jgy</Text>
          <View style={styles.justifyCenter}>
            {detailsArr.map((item) => (
              <View style={styles.textCenter}>
                <Text>{item.num}</Text>
                <Text style={{ fontWeight: "700", marginTop: 3 }}>{item.text}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.textLight}>UX Design Enthusiat currently working as a chef in Lagos</Text>
          <View style={styles.flex}>
            <Pressable style={styles.bgGreen}>
              <Text style={styles.textWhite}>Edit Profile</Text>
            </Pressable>
            <Pressable style={styles.bgGreen}>
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
                { paddingHorizontal: "9.58%" },
              ]}
            >
              <Icon dark={active === index ? "#fff" : "#50A040"} />
            </Pressable>
          ))}
        </View>
        <View style={styles.img}>
          {imgArr.map((item, index) => (
            <ImgBgRender key={index} img={item} />
          ))}
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
