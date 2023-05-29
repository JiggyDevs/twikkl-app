import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Effect2 from "@assets/svg/Effect2";
import Effect1 from "@assets/svg/Effect1";

const EffectHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: ${wp(5)}px;
`;
const EffectContent = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: rgba(255, 255, 255, 0.45);
  gap: 20px;
  padding-horizontal: ${wp(6)}px;
  padding-vertical: ${hp(2)}px;
`;
const Boxes = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  margin-bottom: ${hp(0.5)}px;
  border-color: #a10000;
`;
const Center = styled.View`
  align-items: center;
`;

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
    <View>
      <EffectHeader>
        <Effect2 />
        <Effect1 />
        {effectArr.map((item) => (
          <Pressable key={item} onPress={() => setEffectItems(item)}>
            <Center
              style={
                effectItems === item && {
                  borderBottomColor: "#F1FCF2",
                  borderBottomWidth: "3px",
                  borderRadius: "0.5px",
                  paddingBottom: 12,
                }
              }
            >
              <Text style={{ color: effectItems === item ? "#fff" : "rgba(255, 255, 255, 0.45)" }}>{item}</Text>
            </Center>
          </Pressable>
        ))}
      </EffectHeader>
      <EffectContent>
        {effectContentArr.map((item) => (
          <Pressable onPress={() => setTone(item)} key={item.text}>
            <Center style={{ width: wp(18) }}>
              <Boxes style={{ backgroundColor: item.color, borderWidth: tone === item ? 1.5 : 0 }} />
              <Text style={{ color: "#fff" }}>{item.text}</Text>
            </Center>
          </Pressable>
        ))}
      </EffectContent>
    </View>
  );
};

export default Effects;
