import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import ButtonEl from "@twikkl/components/ButtonEl";
import { ViewVariant } from "@twikkl/configs";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();
  return (
    <View style={styles.wrapper}>
      <View style={styles.top}>
        <Image source={require("@assets/imgs/logos/logo.png")} />
        <Text style={styles.bigText}>
          A blockchain-based distributed system for video sharing and social networking.
        </Text>
        <Text style={styles.text}>Giving you power to recreate your thoughts in a decentralized system</Text>
      </View>
      <View style={styles.btnWrapper}>
        <ButtonEl onPress={() => router.push("auth/Register")}>
          <Text style={ViewVariant.buttonText}>Create Account</Text>
        </ButtonEl>
      </View>
      <ButtonEl bg="#C0CCC1" onPress={() => router.push("auth/Login")}>
        <Text style={ViewVariant.buttonText}>Sign In</Text>
      </ButtonEl>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 150,
    backgroundColor: "#F1FCF2",
  },
  bigText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  text: {
    fontSize: 12,
    textAlign: "center",
  },
  top: {
    alignItems: "center",
  },
  btnWrapper: {
    marginBottom: 32,
    marginTop: 112,
  },
});
