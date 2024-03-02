import { TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-paper";
import { useRouter } from "expo-router";

const UserAvatar = ({ pic, name, userId, size }: { userId: string; pic?: string; name?: string; size?: number }) => {
  const router = useRouter();

  const fullNameArr = name ? name.split(" ") : [];
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
          <Avatar.Image style={{ backgroundColor: "#B08F6C" }} size={size || 40} source={{ uri: pic }} />
        ) : (
          <Avatar.Text
            style={{ backgroundColor: "#B08F6C" }}
            size={32}
            label={initial.toUpperCase()}
            labelStyle={{ color: "#fff", fontWeight: "700" }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default UserAvatar;
