import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";

const VoteCard = ({ vid, name }: { vid: number; name: string }) => {
  return (
    <View style={styles.card}>
      <Pressable onPress={() => {}}>
        <Image source={vid} />
      </Pressable>
      <View style={{ flex: 1 }}>
        <Text>{name}</Text>
        <Text>Copyright infringement</Text>
      </View>
      <View>
        <View style={styles.upVote}>
          <Text>Upvote</Text>
        </View>
        <View style={[styles.upVote, styles.downVote]}>
          <Text>Downvote</Text>
        </View>
      </View>
    </View>
  );
};

export default VoteCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    backgroundColor: "#143615",
    padding: 8,
    flexDirection: "row",
    gap: 10,
  },
  upVote: {
    backgroundColor: "#50A040",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    padding: 5,
    width: 50,
    justifyContent: "center",
  },
  downVote: {
    backgroundColor: "#E20000",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 8,
  },
});
