import { View } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";

const UserAvatar = ({ pic, name }: { pic?: string; name?: string }) => {
  let fullNameArr = name ? name.split(" ") : [];
  const initial = !Boolean(fullNameArr.length)
    ? ""
    : `${fullNameArr[0] ? fullNameArr[0][0] : ""}${fullNameArr[1] ? fullNameArr[1][0] : ""}`;
  console.log(initial);

  return (
    <View>
      {pic ? (
        <Avatar.Image style={{ backgroundColor: "#B08F6C" }} size={32} source={{ uri: pic }} />
      ) : (
        <Avatar.Text
          style={{ backgroundColor: "#B08F6C" }}
          size={32}
          label={initial}
          labelStyle={{ color: "#fff", fontWeight: "700" }}
        />
      )}
    </View>
  );
};

export default UserAvatar;
