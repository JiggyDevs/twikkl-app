import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import ListItem from "@twikkl/components/ListItem";
import ToggleButton from "@twikkl/components/ToggleButton";

const Notifications = () => {
  const [data, setData] = useState({
    inApp: true,
    push: true,
    likes: true,
    comments: true,
    followers: true,
    mentions: true,
    reposts: true,
    vidFollow: true,
    vidSuggestion: true,
  });
  const updateData = (field: string, value: boolean) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };
  return (
    <View>
      <Text>Push notification</Text>
      <View style={styles.card}>
        <ListItem
          title="In-app notifications"
          action={<ToggleButton checked={data.inApp} onToggle={() => updateData("inApp", !data.inApp)} />}
        />
        <ListItem
          title="Push notification"
          action={<ToggleButton checked={data.push} onToggle={() => updateData("push", !data.push)} />}
        />
      </View>
      <Text>Interactions</Text>
      <View style={styles.card}>
        <ListItem
          title="Likes"
          action={<ToggleButton checked={data.likes} onToggle={() => updateData("likes", !data.likes)} />}
        />
        <ListItem
          title="Comments"
          action={<ToggleButton checked={data.comments} onToggle={() => updateData("comments", !data.comments)} />}
        />
        <ListItem
          title="Followers"
          action={<ToggleButton checked={data.followers} onToggle={() => updateData("followers", !data.followers)} />}
        />
        <ListItem
          title="Mentions and Tags"
          action={<ToggleButton checked={data.mentions} onToggle={() => updateData("mentions", !data.mentions)} />}
        />
        <ListItem
          title="Reposts"
          action={<ToggleButton checked={data.reposts} onToggle={() => updateData("reposts", !data.reposts)} />}
        />
      </View>
      <Text>Video Updates</Text>
      <View style={styles.card}>
        <ListItem
          title="Videos from accounts you follow"
          action={<ToggleButton checked={data.vidFollow} onToggle={() => updateData("vidFollow", !data.vidFollow)} />}
        />
        <ListItem
          title="Video suggestions"
          action={
            <ToggleButton
              checked={data.vidSuggestion}
              onToggle={() => updateData("vidSuggestion", !data.vidSuggestion)}
            />
          }
        />
      </View>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#143615",
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 3,
    gap: 10,
    padding: 10,
  },
});
