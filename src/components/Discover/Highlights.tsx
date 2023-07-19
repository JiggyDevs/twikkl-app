// import URLS from "@assets/data/discover/URLS";
// import instaStory from "@assets/data/discover/instaStory";
import URLS from "@twikkl/data/discover/URLS";
import data from "@twikkl/data/discover/instaStory";
import { View, Text, StyleSheet, Image, ToastAndroid } from "react-native";
import InstaStory from "react-native-insta-story";
import { colors } from "../../../app/Discover";
// import AppText from "../AppText";
// import Size from "@twikkl/utility/useResponsiveSize";
// import fonts from "@twikkl/configs/fonts";
// import { ToastAndroid } from "react-native";

// import colors from "@twikkl/configs/colors";

const Highlights = (): JSX.Element => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Trending</Text>
      </View>

      <InstaStory
        data={data}
        duration={10}
        avatarSize={80}
        onStart={(item: any) => console.log(item)}
        onClose={(item: any) => console.log("close: ", item)}
        avatarWrapperStyle={{
          backgroundColor: "yellow",
          borderStyle: "dotted",
        }}
        avatarTextStyle={{
          fontFamily: "axiforma",
          color: colors.white200,
        }}
        unPressedAvatarTextColor={colors.white200}
        pressedAvatarTextColor={colors.white200}
        style={{ backgroundColor: colors.green200, marginBottom: 12.5 }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 90,
    alignItems: "center",
    marginRight: 15,
  },
  cardTitle: {
    fontSize: 14,
  },
  container: {
    marginBottom: 25,
    marginTop: 12.5,
  },
  image: {
    height: 90,
    width: "100%",
    borderRadius: 45,
    borderColor: "#fff",
    borderWidth: 2,
  },
  title: {
    fontSize: 16,
    marginBottom: -15,
    marginLeft: 24,
  },
});

export default Highlights;
