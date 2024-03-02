import { View } from "react-native";
import React, { useState } from "react";
import Settings from "./Settings";
import BackHeader from "@twikkl/components/BackHeader";
import { useLocalSearchParams, useRouter } from "expo-router";
import Account from "./Account";
import Notifications from "./Notifications";

const Index = () => {
  const { name } = useLocalSearchParams();
  const [screen, setScreen] = useState(name ?? "Settings");
  const router = useRouter();

  const handleBackPress = () => (name || screen === "Settings" ? router.back() : setScreen("Settings"));

  return (
    <View style={{ gap: 42, paddingTop: 60, paddingHorizontal: 16 }}>
      <BackHeader title={screen as string} onPress={handleBackPress} />
      {screen === "Settings" && <Settings setScreen={setScreen} />}
      {screen === "Account" && <Account />}
      {screen === "Notifications" && <Notifications />}
    </View>
  );
};

export default Index;
