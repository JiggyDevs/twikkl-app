import { View } from "react-native";
import React, { useState } from "react";
import BackHeader from "@twikkl/components/BackHeader";
import { useRouter } from "expo-router";
import Settings from "./settings";
import Recovery from "./recovery";

const Index = () => {
  const [screen, setScreen] = useState("Settings");
  const router = useRouter();

  const handleBackPress = () => (screen === "Settings" ? router.replace("/wallet") : setScreen("Settings"));

  return (
    <View style={{ gap: 42, paddingTop: 60, paddingHorizontal: 16 }}>
      <BackHeader title={screen} onPress={handleBackPress} />
      {screen === "Settings" && <Settings setScreen={setScreen} />}
      {screen === "Seed phrase" && <Recovery />}
    </View>
  );
};

export default Index;
