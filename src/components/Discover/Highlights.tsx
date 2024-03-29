import data from "@twikkl/data/discover/instaStory";
import { View, Text, StyleSheet } from "react-native";
import InstaStory from "react-native-insta-story";

const Highlights = (): JSX.Element => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Trending</Text>
      </View>
      <InstaStory
        data={data}
        duration={10}
        avatarSize={80}
        avatarWrapperStyle={{
          borderStyle: "dashed",
        }}
        avatarTextStyle={{
          fontSize: 15,
          fontWeight: "700",
        }}
        pressedBorderColor="lightgray"
        unPressedBorderColor="#fff"
        unPressedAvatarTextColor="#fff"
        pressedAvatarTextColor="#fff"
        style={{ backgroundColor: "#50A040", marginBottom: 15, position: "relative" }}
      />
    </View>
  );
};
// zomlazimle@gufum.com
const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
    marginTop: 12.5,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: -15,
    marginLeft: 16,
  },
});

export default Highlights;
