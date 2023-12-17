import { View, Text, ImageBackground, StyleSheet, Dimensions } from "react-native";
import React from "react";
import LikeIcon from "@assets/svg/LikeIcon";
import EyeIcon from "@assets/svg/EyeIcon";
import { s5ClientAuthToken } from "@twikkl/utils/config";
import { ResizeMode, Video } from "expo-av";

const ImgBgRender = ({ img, views = 0, likes = 0 }: { img?: string; views?: number; likes?: number }) => {
  const { width } = Dimensions.get("window");
  console.log(img);
  const cardWidth = (width - 12 - 12 * 3) / 3;

  return (
    <Video
      source={{
        uri: `${img}?auth_token=${s5ClientAuthToken}`,
      }}
      shouldPlay={false}
      isLooping
      resizeMode={ResizeMode.COVER}
      style={[styles.container, { width: cardWidth }]}
    >
      <View style={styles.flexRow}>
        <LikeIcon />
        <Text style={{ color: "#fff" }}>{likes}</Text>
        <EyeIcon />
        <Text style={{ color: "#fff" }}>{views}</Text>
      </View>
    </Video>
  );
};

export default ImgBgRender;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    position: "relative",
    backgroundColor: "black",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 127,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 4,
    right: 4,
    gap: 3,
  },
});
