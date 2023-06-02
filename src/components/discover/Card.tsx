import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import colors from "@twikkl/configs/colors";
import Size from "@twikkl/utility/useResponsiveSize";
import AppText from "../AppText";
import { useRouter } from "expo-router";

const Card = (): JSX.Element => {
  const router = useRouter();

  return (
    <View style={{ paddingHorizontal: Size.calcWidth(10) }}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: "https://picsum.photos/seed/696/3000/2000" }} resizeMode="cover" />

        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <AppText style={{ fontSize: Size.calcWidth(16) }}>Open AI</AppText>
            <View style={styles.membersContainer}>
              <FontAwesome5 name="user-friends" size={Size.calcAverage(16)} color={colors.white100} />
              <AppText style={styles.members}>550K Members</AppText>
            </View>
          </View>

          <AppText style={styles.description}>
            Conducting fundamental, long-term research toward the creation of safe Artificial General Intelligence.
          </AppText>

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
            <AppText style={styles.followers}>20 followers are members</AppText>
          </View>

          <TouchableOpacity onPress={() => router.push("/groups/Ubong")} style={styles.button}>
            <AppText style={styles.buttonText}>Join Group</AppText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.notInterestedContainer}>
            <AppText style={styles.notInterersted}>Not Interested</AppText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    height: Size.calcAverage(24),
    width: Size.calcAverage(24),
    borderRadius: Size.calcAverage(24),
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Size.calcHeight(16),
  },
  avatarLeft: {
    marginLeft: Size.calcWidth(-10),
  },
  button: {
    paddingVertical: Size.calcHeight(15),
    width: "100%",
    backgroundColor: colors.green300,
    borderRadius: Size.calcAverage(16),
  },
  buttonText: {
    color: colors.white200,
    textAlign: "center",
  },
  container: {
    borderRadius: Size.calcAverage(16),
    overflow: "hidden",
    marginBottom: Size.calcHeight(16),
  },
  content: {
    paddingHorizontal: Size.calcWidth(16),
    paddingBottom: Size.calcHeight(20),
    paddingTop: Size.calcHeight(8),
    backgroundColor: colors.green200,
  },
  description: {
    fontWeight: "400",
    fontSize: Size.calcWidth(14),
    marginTop: Size.calcHeight(4),
    marginBottom: Size.calcHeight(8),
  },
  followers: {
    fontWeight: "400",
    marginLeft: Size.calcWidth(11),
    fontSize: Size.calcWidth(14),
  },
  image: {
    height: Size.calcHeight(250),
    width: "100%",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  members: {
    fontWeight: "400",
    fontSize: Size.calcWidth(14),
    marginLeft: Size.calcWidth(9),
  },
  membersContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  notInterersted: {
    fontSize: Size.calcWidth(14),
    fontWeight: "400",
    textAlign: "center",
  },
  notInterestedContainer: {
    alignSelf: "center",
    marginTop: Size.calcHeight(20),
  },
});

export default Card;
