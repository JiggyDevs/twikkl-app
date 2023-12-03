import { View, Text } from "react-native";
import BackHeader from "@twikkl/components/BackHeader";
import VoteCard from "@twikkl/components/VoteCard";
import { useState } from "react";
import BigView from "@twikkl/components/Discover/BigView";
import { useRouter } from "expo-router";

const voteData = [
  { vid: require("../assets/imgs/notif2.png"), name: "@glorypra.eth", downVoteCount: "2.5K", upVoteCount: "3K" },
  { vid: require("../assets/imgs/notif3.png"), name: "@glory.eth", downVoteCount: "3.5K", upVoteCount: "2K" },
  { vid: require("../assets/imgs/notif1.png"), name: "@praise.eth", downVoteCount: "4.5K", upVoteCount: "6K" },
  { vid: require("../assets/imgs/notif3.png"), name: "@lory.eth", downVoteCount: "5.5K", upVoteCount: "4.7K" },
];

const Votes = () => {
  const [bigView, setBigView] = useState(false);
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      {bigView ? (
        <BigView setBigView={setBigView} />
      ) : (
        <View style={{ paddingTop: 60, paddingHorizontal: 16, gap: 16 }}>
          <BackHeader onPress={() => router.replace("Home")} title="Vote" />
          <Text>Videos to vote on</Text>
          <View style={{ gap: 12 }}>
            {voteData.map((votes) => (
              <VoteCard setBigView={setBigView} {...votes} />
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

export default Votes;
