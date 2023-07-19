import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

// import colors from "@twikkl/configs/colors";
// import Size from "@twikkl/utility/useResponsiveSize";
// import AppText from "../AppText";
import { useRouter } from "expo-router";
import { colors } from "../../../app/Discover";
// import { colors } from "../../../app/Discover/inde";

const Card = (): JSX.Element => {
  const router = useRouter();

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: "https://picsum.photos/seed/696/3000/2000" }} resizeMode="cover" />

        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={{ fontSize: 16 }}>Open AI</Text>
            <View style={styles.membersContainer}>
              <FontAwesome5 name="user-friends" size={16} color={colors.white100} />
              <Text style={styles.members}>550K Members</Text>
            </View>
          </View>

          <Text style={styles.description}>
            Conducting fundamental, long-term research toward the creation of safe Artificial General Intelligence.
          </Text>

          <View style={styles.avatarContainer}>
            {[...Array(4)].map((_, index) => {
              return (
                <Image
                  key={index}
                  style={[styles.avatar, index > 0 && styles.avatarLeft]}
                  source={{ uri: "https://picsum.photos/seed/696/3000/2000" }}
                  resizeMode="cover"
                />
              );
            })}
            <Text style={styles.followers}>20 followers are members</Text>
          </View>

          <TouchableOpacity onPress={() => router.push("Discover/slug")} style={styles.button}>
            <Text style={styles.buttonText}>Join Group</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.notInterestedContainer}>
            <Text style={styles.notInterersted}>Not Interested</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    height: 24,
    width: 24,
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
    width: "100%",
    backgroundColor: "#50a040",
    borderRadius: 16,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
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
    backgroundColor: colors?.green200,
  },
  description: {
    fontWeight: "400",
    fontSize: 14,
    marginTop: 4,
    marginBottom: 8,
  },
  followers: {
    fontWeight: "400",
    marginLeft: 11,
    fontSize: 14,
  },
  image: {
    height: 250,
    width: "100%",
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
  },
  membersContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  notInterersted: {
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
  },
  notInterestedContainer: {
    alignSelf: "center",
    marginTop: 20,
  },
});

export default Card;
