import { View, Text } from "react-native";
import React, { ReactElement } from "react";

const TokenCard = ({
  name,
  price,
  percent,
  fullname,
  icon,
  add,
  quantity,
  qtyInDollar,
}: {
  name: string;
  price: string;
  percent: number;
  fullname: string;
  icon: string;
  add?: boolean;
  quantity: string;
  qtyInDollar: string;
}) => {
  return (
    <View style={{ flexDirection: "row", gap: 15 }}>
      {icon}
      <View style={{ flex: 1 }}>
        <Text>{name}</Text>
        {price ? (
          <View style={{ flexDirection: "row", gap: 3 }}>
            <Text>{price}</Text> <Text style={{ color: percent > 0 ? "green" : "red" }}>{`${percent}%`}</Text>
          </View>
        ) : (
          <Text>{fullname}</Text>
        )}
      </View>
      {add ? (
        <View />
      ) : (
        <View>
          <Text>{quantity}</Text>
          <Text>{qtyInDollar}</Text>
        </View>
      )}
    </View>
  );
};

export default TokenCard;
