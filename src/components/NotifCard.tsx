import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

type IProps = {
  avatar: any;
  text: string;
  desc: string;
  time: string;
  like?: boolean;
  img: any;
  action: string;
};

const NotifCard = ({ avatar, text, desc, time, like, img, action }: IProps) => {
  return (
    <View style={styles.wrapper}>
      <Image source={avatar} />
      <View style={styles.flex}>
        <Text style={styles.textBold}>{text}</Text>
        <Text style={{ fontSize: 12 }}>
          {desc}
          <Text style={{ color: "#50A040" }}>{time}</Text>
        </Text>
      </View>
      {like ? (
        <Image source={img} />
      ) : (
        <View style={styles.bgGreen}>
          <Text style={styles.textWhite}>{action}</Text>
        </View>
      )}
    </View>
  );
};

export default NotifCard;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
  },
  bgGreen: {
    padding: 10,
    backgroundColor: "#50A040",
    borderRadius: 16,
  },
  textWhite: {
    fontWeight: "700",
    fontSize: 14,
    color: "#F1FCF2",
  },
  textBold: {
    fontWeight: "700",
    fontSize: 14,
  },
  flex: {
    flex: 1,
  },
});
