import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Effect2 from "@assets/svg/Effect2";
import Effect1 from "@assets/svg/Effect1";

const effectArr = ["Skin Tone", "Appearance", "Editing"];
const effectContentArr = [
  { color: "#FEE3C6", text: "Pale Ivory" },
  { color: "#FEE9B2", text: "Warm Ivory" },
  { color: "#F8D999", text: "Sand" },
  { color: "#F9D4A0", text: "Rose Beige" },
  { color: "#ECC091", text: "Limestone" },
  { color: "#F2C280", text: "Beige" },
  { color: "#D49E7A", text: "Sienna" },
  { color: "#BB6536", text: "Amber" },
  { color: "#CF965F", text: "Honey" },
  { color: "#AD8A60", text: "Band" },
  { color: "#935F37", text: "Almond" },
  { color: "#733F17", text: "Bronze" },
  { color: "#CF965F", text: "Hone" },
  { color: "#AD8A60", text: "Ban" },
  { color: "#935F37", text: "Almon" },
  { color: "#733F17", text: "Bronz" },
  { color: "#CF965F", text: "Hon" },
  { color: "#AD8A60", text: "Ba" },
  { color: "#935F37", text: "Almo" },
  { color: "#733F17", text: "Bron" },
];

interface ITone {
  color: string;
  text: string;
}

const Effects = () => {
  const [effectItems, setEffectItems] = useState("Skin Tone");
  const [tone, setTone] = useState<ITone>();
  return (
    <View style={styles.container}>
      <View style={styles.effectHeader}>
        <Effect2 />
        <Effect1 />
        {effectArr.map((item) => (
          <Pressable key={item} onPress={() => setEffectItems(item)}>
            <View
              style={
                effectItems === item
                  ? {
                      borderBottomColor: "#F1FCF2",
                      borderBottomWidth: 3,
                      borderRadius: 0.5,
                      paddingBottom: 12,
                      alignItems: "center",
                    }
                  : {
                      alignItems: "center",
                    }
              }
            >
              <Text style={{ color: effectItems === item ? "#fff" : "rgba(255, 255, 255, 0.45)" }}>{item}</Text>
            </View>
          </Pressable>
        ))}
      </View>
      <View style={styles.effectContent}>
        {effectContentArr.map((item) => (
          <Pressable onPress={() => setTone(item)} key={item.text}>
            <View style={{ ...styles.center, width: wp(18) }}>
              <View style={{ ...styles.boxes, backgroundColor: item.color, borderWidth: tone === item ? 1.5 : 0 }} />
              <Text style={{ color: "#fff" }}>{item.text}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default Effects;

const styles = StyleSheet.create({
  effectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
  },
  effectContent: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "rgba(255, 255, 255, 0.45)",
    gap: 20,
    paddingHorizontal: "6%",
    paddingVertical: "2%",
  },
  boxes: {
    width: 48,
    height: 48,
    borderRadius: 8,
    marginBottom: "0.5%",
    borderColor: "#a10000",
  },
  center: {
    alignItems: "center",
  },
  container: {
    marginTop: 13,
  }
});
