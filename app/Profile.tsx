import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React, { useState } from "react";
import Back from "@assets/svg/Back";
import MoreIcon from "@assets/svg/More";
import Twitter from "@assets/svg/Twitter";
import LiveIcon from "@assets/svg/LiveIcon";
import Play from "@assets/svg/Play";
import PinIcon from "@assets/svg/PinIcon";
import LabelIcon from "@assets/svg/LabelIcon";
import ImgBgRender from "@twikkl/components/ImgBgRender";

const detailsArr = [
  { num: "4.5K", text: "Followers" },
  { num: "2K", text: "Following" },
  { num: "240K", text: "Total Twikks" },
];
const iconsArr = [<Play />, <PinIcon />, <LiveIcon />, <LabelIcon />];
const imgArr = [
  require("../assets/imgs/prof1.png"),
  require("../assets/imgs/prof2.png"),
  require("../assets/imgs/prof3.png"),
  require("../assets/imgs/prof4.png"),
  require("../assets/imgs/prof5.png"),
  require("../assets/imgs/prof6.png"),
];

const Profile = () => {
  const [active, setActive] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <Back dark="#041105" />
        <Text style={styles.boldText}>Profile</Text>
        <MoreIcon />
      </View>
      <View style={styles.center}>
        <Image source={require("../assets/imgs/profile.png")} />
        <Text style={styles.boldTextSpace}>jerry.jgy</Text>
        <View style={styles.justifyCenter}>
          {detailsArr.map((item) => (
            <View style={styles.textCenter}>
              <Text>{item.num}</Text>
              <Text>{item.text}</Text>
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
        {iconsArr.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => setActive(index)}
            style={[active === index ? styles.bgGreen : { backgroundColor: "transparent" }, { paddingHorizontal: 40 }]}
          >
            {item}
          </Pressable>
        ))}
      </View>
      <View style={styles.img}>
        {imgArr.map((item) => (
          <ImgBgRender img={item} />
        ))}
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    borderRadius: 16,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    // gap: 20,
  },
  flex: {
    flexDirection: "row",
    gap: 20,
  },
  center: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  justifyCenter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 23,
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
    marginBottom: 5,
    marginTop: 10,
    textAlign: "center",
    fontSize: 12,
  },
  bgGreen: {
    padding: 10,
    backgroundColor: "#50A040",
    borderRadius: 16,
  },
  img: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 14,
    marginTop: 30,
  },
  // modeBorder: {
  //   borderRadius: 16,
  //   padding,
  // },
});
