import { View, Text } from "react-native";
import React from "react";

const NFTCard = ({ name, token, graphic }: { graphic: string; name: string; token: string }) => {
  return (
    <View style={{ backgroundColor: "red", borderRadius: 20, height: 70, width: "50%" }}>
      {graphic}
      <View style={{ padding: 5 }}>
        <Text>{name}</Text>
        <View style={{ backgroundColor: "red", borderRadius: 5, padding: 3 }}>
          <Text>{token}</Text>
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
