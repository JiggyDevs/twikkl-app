import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import ListItem from "@twikkl/components/ListItem";
import ToggleButton from "@twikkl/components/ToggleButton";

const Notifications = () => {
  const [data, setData] = useState({
    inApp: true,
    push: true,
    Likes: true,
    Comments: true,
    Followers: true,
    Mentions: true,
    Reposts: true,
    vidFollow: true,
    vidSuggestion: true,
  });
  const interactionsData = ["Likes", "Comments", "Followers", "Mentions", "Reposts"];
  const updateData = (field: string, value: boolean) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <View>
      <Text>Push notification</Text>
      <View style={styles.card}>
        <ListItem
          notif
          title="In-app notifications"
          action={<ToggleButton checked={data.inApp} onToggle={() => updateData("inApp", !data.inApp)} />}
        />
        <ListItem
          notif
          title="Push notification"
          action={<ToggleButton checked={data.push} onToggle={() => updateData("push", !data.push)} />}
        />
      </View>
      <Text>Interactions</Text>
      <View style={styles.card}>
        {interactionsData.map((interaction) => (
          <ListItem
            notif
            title={interaction}
            action={
              <ToggleButton
                checked={data[interaction as keyof typeof data]}
                onToggle={() => updateData(interaction, !data[interaction as keyof typeof data])}
              />
            }
          />
        ))}
      </View>
      <Text>Video Updates</Text>
      <View style={styles.card}>
        <ListItem
          notif
          title="Videos from accounts you follow"
          action={<ToggleButton checked={data.vidFollow} onToggle={() => updateData("vidFollow", !data.vidFollow)} />}
        />
        <ListItem
          notif
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
    marginBottom: 20,
    marginTop: 5,
    gap: 10,
    padding: 13,
  },
});
