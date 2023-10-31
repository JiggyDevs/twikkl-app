import { View, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import VideoFeedItem from "../VideoFeedItem";
import { Octicons } from "@expo/vector-icons";

const BigView = ({ setBigView }: { setBigView: Function }) => {
  const [shareVisible, setShareVisible] = useState(false);

  return (
    <>
      <TouchableOpacity onPressOut={() => setBigView(false)} style={styles.iconContainer}>
        <Octicons name="chevron-left" size={24} color="#fff" />
      </TouchableOpacity>
      <View style={[StyleSheet.absoluteFill]}>
        <VideoFeedItem
          item={{ video: require("@assets/videos/home-temp.mp4") }}
          index={0}
          bigView
          visibleIndex={0}
          onShareClick={() => setShareVisible(true)}
        />
      </View>
    </>
  );
};

export default BigView;

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: "#000",
    zIndex: 1,
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginTop: 50,
    marginLeft: 15,
  },
});
