import Account from "@assets/svg/Account";
import Help from "@assets/svg/Help";
import Invite from "@assets/svg/Invite";
import Language from "@assets/svg/Language";
import Lock from "@assets/svg/Lock";
import Report from "@assets/svg/Report";
import Safety from "@assets/svg/Safety";
import Terms from "@assets/svg/Terms";
import { EIcon, TwikklIcon } from "@twikkl/configs";
import { View, Text, StyleSheet, Pressable } from "react-native";

const settings = [
  { icon: <Account />, text: "Account" },
  { icon: <TwikklIcon name={EIcon.BELL} size={24} color="#000" />, text: "Notifications" },
  { icon: <Lock />, text: "Security" },
  { icon: <Language />, text: "Language" },
  { icon: <Safety />, text: "Safety and Privacy" },
  { icon: <Help />, text: "Help" },
  { icon: <Terms />, text: "Terms and polices" },
  { icon: <Report />, text: "Report a problem" },
  { icon: <Invite />, text: "Invite friends" },
];

const Settings = ({ setScreen }: { setScreen: Function }) => {
  return (
    <View style={{ gap: 30 }}>
      {settings.map(({ icon, text }) => (
        <Pressable onPress={() => setScreen(text)} style={styles.flexRow}>
          <View style={{ width: 25 }}>{icon}</View>
          <Text style={{ fontSize: 16 }}>{text}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
  },
});
