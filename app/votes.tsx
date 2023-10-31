import { View, Text } from "react-native";
import React from "react";
import BackHeader from "@twikkl/components/BackHeader";
import VoteCard from "@twikkl/components/VoteCard";

const voteData = [
  { vid: 2, name: "@glorypra.eth" },
  { vid: 1, name: "@glory.eth" },
  { vid: 4, name: "@praise.eth" },
  { vid: 6, name: "@lory.eth" },
];

const votes = () => {
  return (
    <View>
      <BackHeader onPress={() => {}} title="Vote" />
      <Text>Videos to vote on</Text>
      <View style={{ gap: 10 }}>
        {voteData.map((vote) => (
          <VoteCard {...vote} />
        ))}
      </View>
    </View>
  );
};

export default votes;
