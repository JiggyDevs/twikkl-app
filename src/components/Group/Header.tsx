import { View, TouchableOpacity, Image, StyleSheet, ScrollView, Text } from "react-native";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

// import AppText from "@twikkl/components/AppText";
// import URLS from "@assets/data/discover/URLS";
// import Size from "@twikkl/utility/useResponsiveSize";
// import colors from "@twikkl/configs/colors";

// import UploadIcon from "../../../assets/svg/groups/upload.svg";
// import GridIcon from "../../../assets/svg/groups/grid.svg";
// import DropDownIcon from "../../../assets/svg/groups/dropdown.svg";
import URLS from "@twikkl/data/discover/URLS";
import { colors } from "../../../app/Discover";

const topics = [
  "artificial intelligence",
  "coding",
  "ui design",
  "front-end development",
  "back-end development",
  "mobile-application development",
];

const Header = (): JSX.Element => {
  return (
    <>
      <Image style={styles.bannerImage} source={{ uri: URLS.WEDDING }} />
      <View style={styles.container}>
        <Image style={styles.profilePicture} source={{ uri: URLS.WEDDING }} />
        <Text style={styles.title}>Open AI</Text>
        <Text style={styles.description}>
          Conducting fundamental, long-term research toward the creation of safe Artificial General Intelligence.
        </Text>
        <View style={[styles.horizontal, styles.detailsContainer]}>
          <View style={styles.horizontal}>
            <MaterialCommunityIcons name="lock" size={20} color={colors.white100} />
            <Text style={styles.details}>Closed</Text>
          </View>
          <View style={[styles.horizontal, { marginLeft: 10 }]}>
            <FontAwesome5 name="user-friends" size={19} color={colors.white200} />
            <Text style={styles.details}>550k members</Text>
          </View>

          <View style={[styles.horizontal, { marginLeft: "auto" }]}>
            {Array(3)
              .fill(0)
              .map((_, index) => {
                return (
                  <Image
                    key={index}
                    source={{ uri: URLS.manAvatar }}
                    style={[styles.avatar, index === 0 && { marginLeft: 0 }]}
                  />
                );
              })}
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.topicsContainer} horizontal>
        {topics.map((topic, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={[styles.topicsButton, index === topics.length - 1 && { marginRight: 16 }]}
            >
              <Text style={{ color: "#fff" }}> {topic}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View style={{ backgroundColor: colors.green200, marginBottom: 16 }}>
        <View style={styles.actionContainer}>
          <View style={styles.horizontal}>
            <Image source={{ uri: URLS.woman2 }} style={styles.actionAvatar} />
            {/* <UploadIcon /> */}
          </View>
          <View style={styles.horizontal}>
            {/* <DropDownIcon style={{ marginRight: 19 }} />
            <GridIcon /> */}
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  actionAvatar: {
    borderRadius: 17,
    height: 34,
    width: 34,
    marginRight: 16,
  },
  actionContainer: {
    backgroundColor: colors.green100,
    marginVertical: 5,
    paddingVertical: 8,
    flexDirection: "row",
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  avatar: {
    borderRadius: 17.5,
    height: 35,
    width: 35,
    marginLeft: -15,
  },
  bannerImage: {
    height: 250,
    width: "100%",
  },
  container: {
    backgroundColor: colors.green200,
    flex: 1,
    paddingHorizontal: 16,
  },
  description: {
    fontWeight: "400",
    fontSize: 13,
  },
  details: {
    marginLeft: 5,
    fontWeight: "400",
    fontSize: 14,
  },
  detailsContainer: {
    marginTop: 8,
    marginBottom: 16,
  },
  horizontal: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePicture: {
    borderRadius: 35,
    height: 70,
    width: 70,
    marginTop: -45,
  },
  title: {
    fontSize: 20,
    marginTop: 18,
    marginBottom: 4,
  },
  topicsButton: {
    paddingVertical: 6,
    marginVertical: 8,
    paddingHorizontal: 14.5,
    marginLeft: 16,
    borderColor: colors.green300,
    borderWidth: 1.5,
    borderRadius: 100,
  },
  topicsContainer: {
    backgroundColor: colors.green100,
    alignItems: "center",
  },
});
export default Header;
