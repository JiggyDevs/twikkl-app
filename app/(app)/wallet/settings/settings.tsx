import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { Fragment, useState } from "react";
import SeedPhraseIcon from "@assets/svg/SeedPhraseIcon";
import Lock from "@assets/svg/Lock";
import OptionCard from "@twikkl/components/OptionCard";
import WalletIcon from "@assets/svg/WalletIcon";
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

enum WalletActionText {
  rename = "Rename",
  save = "Save",
}

const Settings = ({ setScreen }: { setScreen: Function }) => {
  const [isWalletAvailable, setIsWalletAvailable] = useState(true);
  const [walletActionText, setWalletActionText] = useState<WalletActionText>(WalletActionText.rename);

  return (
    <View style={{ gap: 20 }}>
      {isWalletAvailable && (
        <OptionCard icon={<WalletIcon />} text="Wallet02" desc="@desc" actionText={walletActionText} showActionText />
      )}
      {walletSettings.map(({ icon, text, desc }, itemIndex) => (
        <Fragment key={itemIndex}>
          <OptionCard icon={icon} text={text} desc={desc} setScreen={setScreen} />
        </Fragment>
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
