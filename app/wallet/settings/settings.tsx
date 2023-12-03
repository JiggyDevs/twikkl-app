import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import SeedPhraseIcon from "@assets/svg/SeedPhraseIcon";
import Lock from "@assets/svg/Lock";
// import { walletSettings } from "@twikkl/data/constant";

const settings = [
  { icon: "", text: "Account" },
  { icon: "", text: "Notifications" },
  { icon: "", text: "Security" },
  { icon: "", text: "Language" },
  { icon: "", text: "Safety and Privacy" },
  { icon: "", text: "Help" },
  { icon: "", text: "Terms and polices" },
  { icon: "", text: "Report a problem" },
  { icon: "", text: "Invite friends" },
];
const walletSettings = [
  { icon: <SeedPhraseIcon />, text: "Seed phrase", desc: "Keep your recovery phrase to yourself at all times" },
  { icon: <Lock />, text: "Change pin" },
];

const Settings = ({ setScreen }: { setScreen: Function }) => {
  return (
    <View style={{ gap: 20 }}>
      {walletSettings.map(({ icon, text, desc }) => (
        <Pressable onPress={() => setScreen(text)} style={styles.flexRow}>
          <View style={{ width: 25 }}>{icon}</View>
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
