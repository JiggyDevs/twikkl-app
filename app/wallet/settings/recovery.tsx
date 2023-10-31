import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { recovery } from "@twikkl/data/constant";

const Recovery = () => {
  return (
    <View style={{ gap: 20 }}>
      {recovery.map(({ icon, text, desc }) => (
        <Pressable onPress={() => {}} style={styles.flexRow}>
          {icon}
          <View>
            <Text>{text}</Text>
            <Text>{desc}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default Recovery;

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
    gap: 20,
  },
});
