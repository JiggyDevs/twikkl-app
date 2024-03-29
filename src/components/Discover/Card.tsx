import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

interface ICard {
  img: any;
  title: string;
  forYou?: boolean;
  members: string;
  desc: string;
  followers?: number;
  onPress: Function;
  leaveGroup: Function;
  favPress: Function;
  fav?: boolean;
}

export const imgArr = [
  require("../../../assets/imgs/smallImg1.png"),
  require("../../../assets/imgs/smallImg2.png"),
  require("../../../assets/imgs/smallImg3.png"),
  require("../../../assets/imgs/smallImg4.png"),
];

const Card = ({
  img,
  title,
  forYou,
  members,
  desc,
  followers,
  onPress,
  leaveGroup,
  favPress,
  fav,
}: ICard): JSX.Element => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={img} resizeMode="cover">
        {forYou ? (
          <Ionicons name="lock-closed" color="#fff" size={22} />
        ) : (
          <Ionicons onPress={() => favPress()} name={fav ? "star" : "star-outline"} color="#fff" size={26} />
        )}
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={{ fontSize: 16, color: "#fff", fontWeight: "700" }}>{title}</Text>
          {forYou && (
            <View style={styles.membersContainer}>
              <FontAwesome5 name="user-friends" size={16} color="#fff" />
              <Text style={styles.members}>{members} Members</Text>
            </View>
          )}
        </View>
        <Text style={styles.description}>{desc}</Text>
        <View style={styles.avatarContainer}>
          {imgArr.map((img, index) => {
            return (
              <Image
                key={index}
                style={[styles.avatar, index > 0 && styles.avatarLeft]}
                source={img}
                resizeMode="cover"
              />
            );
          })}
          <Text style={styles.followers}>{forYou ? `${followers} followers are members` : `${members} members`}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            if (forYou) onPress();
            return;
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{forYou ? "Join Group" : "View Group Activity"}</Text>
        </TouchableOpacity>
        {!forYou && (
          <TouchableOpacity onPress={() => leaveGroup()} style={styles.notInterestedContainer}>
            <Text style={styles.notInterersted}>Leave Group</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    height: 28,
    width: 28,
    borderRadius: 24,
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  avatarLeft: {
    marginLeft: -10,
  },
  button: {
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderRadius: 16,
  },
  buttonText: {
    color: "#50A040",
    textAlign: "center",
    fontWeight: "700",
  },
  container: {
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 16,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    paddingTop: 8,
    backgroundColor: "#50A040",
  },
  description: {
    fontWeight: "400",
    fontSize: 14,
    color: "#fff",
    marginTop: 4,
    marginBottom: 6,
  },
  followers: {
    fontWeight: "400",
    marginLeft: 11,
    fontSize: 14,
    color: "#fff",
  },
  image: {
    padding: 16,
    alignItems: "flex-end",
    height: 220,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  members: {
    fontWeight: "400",
    fontSize: 14,
    marginLeft: 9,
    color: "#fff",
  },
  membersContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  notInterersted: {
    textAlign: "center",
    color: "#fff",
  },
  notInterestedContainer: {
    alignSelf: "center",
    marginTop: 20,
  },
});

export default Card;
