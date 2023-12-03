import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import Upvote from "@assets/svg/Upvote";
import Downvote from "@assets/svg/Downvote";

const VoteCard = ({
  vid,
  name,
  downVoteCount,
  upVoteCount,
  setBigView,
}: {
  vid: number;
  name: string;
  downVoteCount?: string;
  upVoteCount?: string;
  setBigView: Function;
}) => {
  const [vote, setVote] = useState("");
  return (
    <View style={styles.card}>
      <Pressable onPress={() => setBigView(true)}>
        <Image source={vid} />
      </Pressable>
      <View style={{ flex: 1, gap: 5 }}>
        <Text style={{ color: "#F1FCF2", fontWeight: "700" }}>{name}</Text>
        <Text style={{ color: "#F8CF75", fontSize: 16 }}>Copyright infringement</Text>
      </View>
      <View style={{ gap: 7, justifyContent: "space-between" }}>
        <Pressable
          onPress={() => (vote ? null : setVote("upVote"))}
          style={[styles.upVote, vote ? { backgroundColor: "#C0CCC1" } : {}]}
        >
          {vote ? <Text style={{ color: "#fff" }}>{upVoteCount}</Text> : <Upvote />}
          <Text style={styles.voteText}>Upvote</Text>
        </Pressable>
        <Pressable
          onPress={() => (vote ? null : setVote("downVote"))}
          style={[styles.upVote, styles.downVote, vote ? { backgroundColor: "#C0CCC1" } : {}]}
        >
          {vote ? <Text style={{ color: "#fff" }}>{downVoteCount}</Text> : <Downvote />}
          <Text style={styles.voteText}>Downvote</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default VoteCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    backgroundColor: "#143615",
    padding: 16,
    flexDirection: "row",
    gap: 10,
  },
  upVote: {
    backgroundColor: "#50A040",
    borderRadius: 8,
    borderBottomRightRadius: 0,
    paddingVertical: 3,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  downVote: {
    backgroundColor: "#E20000",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 8,
  },
  voteText: {
    fontSize: 8,
    fontWeight: "500",
    color: "#fff",
  },
});
