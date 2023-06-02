import { View, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

import AppText from "@twikkl/components/AppText";
import URLS from "@assets/data/discover/URLS";
import Size from "@twikkl/utility/useResponsiveSize";
import colors from "@twikkl/configs/colors";
import UploadIcon from "../../../assets/svg/groups/upload.svg";
import GridIcon from "../../../assets/svg/groups/grid.svg";
import DropDownIcon from "../../../assets/svg/groups/dropdown.svg";

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
        <AppText style={styles.title}>Open AI</AppText>
        <AppText style={styles.description}>
          Conducting fundamental, long-term research toward the creation of safe Artificial General Intelligence.
        </AppText>

        <View style={[styles.horizontal, styles.detailsContainer]}>
          <View style={styles.horizontal}>
            <MaterialCommunityIcons name="lock" size={Size.calcAverage(20)} color={colors.white100} />
            <AppText style={styles.details}>Closed</AppText>
          </View>
          <View style={[styles.horizontal, { marginLeft: Size.calcWidth(10) }]}>
            <FontAwesome5 name="user-friends" size={Size.calcAverage(19)} color={colors.white200} />
            <AppText style={styles.details}>550k members</AppText>
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
              style={[styles.topicsButton, index === topics.length - 1 && { marginRight: Size.calcWidth(16) }]}
            >
              <AppText> {topic}</AppText>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View style={{ backgroundColor: colors.green200, marginBottom: Size.calcHeight(16) }}>
        <View style={styles.actionContainer}>
          <View style={styles.horizontal}>
            <Image source={{ uri: URLS.woman2 }} style={styles.actionAvatar} />
            <UploadIcon />
          </View>
          <View style={styles.horizontal}>
            <DropDownIcon style={{ marginRight: Size.calcWidth(19) }} />
            <GridIcon />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  actionAvatar: {
    borderRadius: Size.calcAverage(34 / 2),
    height: Size.calcAverage(34),
    width: Size.calcAverage(34),
    marginRight: Size.calcWidth(16),
  },
  actionContainer: {
    backgroundColor: colors.green100,
    marginVertical: Size.calcHeight(5),
    paddingVertical: Size.calcHeight(8),
    flexDirection: "row",
    paddingHorizontal: Size.calcWidth(16),
    justifyContent: "space-between",
  },
  avatar: {
    borderRadius: Size.calcAverage(35 / 2),
    height: Size.calcAverage(35),
    width: Size.calcAverage(35),
    marginLeft: Size.calcWidth(-15),
  },
  bannerImage: {
    height: Size.calcHeight(250),
    width: "100%",
  },
  container: {
    backgroundColor: colors.green200,
    flex: 1,
    paddingHorizontal: Size.calcWidth(16),
  },
  description: {
    fontWeight: "400",
    fontSize: Size.calcWidth(13),
  },
  details: {
    marginLeft: Size.calcWidth(5),
    fontWeight: "400",
    fontSize: Size.calcWidth(14),
  },
  detailsContainer: {
    marginTop: Size.calcHeight(8),
    marginBottom: Size.calcHeight(16),
  },
  horizontal: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePicture: {
    borderRadius: Size.calcAverage(70 / 2),
    height: Size.calcAverage(70),
    width: Size.calcAverage(70),
    marginTop: Size.calcHeight(-45),
  },
  title: {
    fontSize: Size.calcAverage(20),
    marginTop: Size.calcHeight(18),
    marginBottom: Size.calcHeight(4),
  },
  topicsButton: {
    paddingVertical: Size.calcHeight(6),
    marginVertical: Size.calcHeight(8),
    paddingHorizontal: Size.calcWidth(14.5),
    marginLeft: Size.calcWidth(16),
    borderColor: colors.green300,
    borderWidth: Size.calcAverage(1.5),
    borderRadius: Size.calcAverage(100),
  },
  topicsContainer: {
    backgroundColor: colors.green100,
    alignItems: "center",
  },
});
export default Header;
