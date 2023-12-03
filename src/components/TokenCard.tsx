import { View, Text, Image } from "react-native";
import React, { ReactElement } from "react";
import ToggleButton from "./ToggleButton";

const TokenCard = ({
  name,
  price,
  percent,
  fullname,
  image,
  add,
  quantity,
  qtyInDollar,
  checked,
  onToggle,
}: {
  name: string;
  price: string;
  percent: number | string;
  fullname: string;
  image: number;
  add?: boolean;
  quantity: string;
  qtyInDollar: string;
  onToggle?: () => void;
  checked?: boolean;
}) => {
  return (
    <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
      <Image source={image} />
      <View style={{ flex: 1 }}>
        <Text>{name}</Text>
        {price ? (
          <View style={{ flexDirection: "row", gap: 3 }}>
            <Text>{price}</Text>
            <Text style={{ color: percent > 0 ? "green" : "red" }}>{`${percent}%`}</Text>
          </View>
        ) : (
          <Text>{fullname}</Text>
        )}
      </View>
      {add ? (
        <ToggleButton checked={checked} onToggle={onToggle} />
      ) : (
        <View style={{ alignItems: "flex-end" }}>
          <Text>{quantity}</Text>
          <Text>{qtyInDollar}</Text>
        </View>
      )}
    </View>
  );
};

export default TokenCard;
