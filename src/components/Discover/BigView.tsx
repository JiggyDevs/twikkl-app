import { View, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import VideoFeedItem from "../VideoFeedItem";
import { Octicons } from "@expo/vector-icons";
import { Post, fetchPostComments } from "@twikkl/services/feed.services";
import { useQuery } from "@tanstack/react-query";

const BigView = ({
  setBigView,
  post,
  refetchComments,
}: {
  setBigView: Function;
  post?: Post;
  refetchComments: () => void;
}) => {
  const [, setShareVisible] = useState(false);

  const { data: comments, refetch } = useQuery(["big-view-comments"], () => fetchPostComments(post?._id || ""), {
    enabled: !!post?._id && !post.comments,
  });

  return (
    <>
      <TouchableOpacity onPressOut={() => setBigView(false)} style={styles.iconContainer}>
        <Octicons name="chevron-left" size={24} color="#fff" />
      </TouchableOpacity>
      {post && (
        <View style={[StyleSheet.absoluteFill]}>
          <VideoFeedItem
            item={{
              ...(post as Post),
              video: post.contentUrl || "",
              comments: post?.comments || comments?.data,
            }}
            index={0}
            bigView
            visibleIndex={0}
            onShareClick={() => setShareVisible(true)}
            refetchComments={() => {
              refetch();
              refetchComments();
            }}
          />
        </View>
      )}
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
