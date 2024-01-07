import { TouchableOpacity, View } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { useRouter } from "expo-router";

const UserAvatar = ({ pic, name, userId }: { userId: string; pic?: string; name?: string }) => {
  const router = useRouter();

  let fullNameArr = name ? name.split(" ") : [];
  const initial = !fullNameArr.length
    ? ""
    : `${fullNameArr[0] ? fullNameArr[0][0] : ""}${fullNameArr[1] ? fullNameArr[1][0] : ""}`;

  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: "/Profile",
            params: {
              userId,
            },
          })
        }
      >
        {pic ? (
          <Avatar.Image style={{ backgroundColor: "#B08F6C" }} size={32} source={pic} />
        ) : (
          <Avatar.Text
            style={{ backgroundColor: "#B08F6C" }}
            size={32}
            label={initial}
            labelStyle={{ color: "#fff", fontWeight: "700" }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default UserAvatar;
