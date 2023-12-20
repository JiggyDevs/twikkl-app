import { View, Text, Image } from "react-native";
import React from "react";

const NFTCard = ({ name, token, graphic }: { graphic: number; name: string; token: string }) => {
  return (
    <View style={{ backgroundColor: "#143615", borderRadius: 20 }}>
      <Image source={graphic} />
      <View style={{ padding: 10, gap: 5 }}>
        <Text style={{ color: "#fff" }}>{name}</Text>
        <View style={{ backgroundColor: "#C0CCC1", borderRadius: 5, padding: 3, alignSelf: "flex-start" }}>
          <Text style={{ fontSize: 10 }}>{token}</Text>
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
