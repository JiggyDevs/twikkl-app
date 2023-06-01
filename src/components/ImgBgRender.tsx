import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import LikeIcon from "@assets/svg/LikeIcon";
import EyeIcon from "@assets/svg/EyeIcon";

const ImgBgRender = ({ img }: { img: string }) => {
  return (
    <ImageBackground style={styles.container} source={{ uri: img }}>
      <View style={styles.flexRow}>
        <LikeIcon />
        <Text>2K</Text>
      </View>
      <View style={styles.flexRow}>
        <EyeIcon />
        <Text>5K</Text>
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
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
