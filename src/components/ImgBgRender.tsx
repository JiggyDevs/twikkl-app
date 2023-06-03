import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import LikeIcon from "@assets/svg/LikeIcon";
import EyeIcon from "@assets/svg/EyeIcon";

const ImgBgRender = ({ img }: { img?: any }) => {
  return (
    <ImageBackground resizeMode="contain" style={styles.container} source={img}>
      <View style={styles.flexRow}>
        <LikeIcon />
        <Text style={{ color: "#fff" }}>2K</Text>
      </View>
      <View style={styles.flexRow}>
        <EyeIcon />
        <Text style={{ color: "#fff" }}>5K</Text>
      </View>
    </ImageBackground>
  );
};

export default ImgBgRender;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: 115,
    height: 127,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
});
