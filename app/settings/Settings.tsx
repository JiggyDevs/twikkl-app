import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { walletSettings } from "@twikkl/data/constant";

const Settings = ({ setScreen }: { setScreen: Function }) => {
  return (
    <View style={{ gap: 20 }}>
      {walletSettings.map(({ icon, text, desc }) => (
        <Pressable onPress={() => setScreen(text)} style={styles.flexRow}>
          {icon}{" "}
          <View>
            <Text>{text}</Text>
            {desc && <Text>{desc}</Text>}
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
    gap: 20,
  },
});
