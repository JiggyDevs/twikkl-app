import URLS from "@assets/data/discover/URLS";
import instaStory from "@assets/data/discover/instaStory";
import { View, StyleSheet, Image } from "react-native";
import InstaStory from "react-native-insta-story";
import AppText from "../AppText";
import Size from "@twikkl/utility/useResponsiveSize";
import fonts from "@twikkl/configs/fonts";
import colors from "@twikkl/configs/colors";

const Highlights = (): JSX.Element => {
  return (
    <>
      <View style={styles.container}>
        <AppText style={styles.title}>Trending</AppText>
      </View>

      <InstaStory
        data={instaStory}
        duration={10}
        avatarSize={Size.calcAverage(80)}
        onStart={(item: any) => console.log(item)}
        onClose={(item: any) => console.log("close: ", item)}
        avatarWrapperStyle={{
          backgroundColor: "yellow",
          borderStyle: "dotted",
        }}
        avatarTextStyle={{
          fontFamily: fonts.axiforma,
          color: colors.white200,
        }}
        unPressedAvatarTextColor={colors.white200}
        pressedAvatarTextColor={colors.white200}
        style={{ backgroundColor: colors.green200, marginBottom: Size.calcHeight(25 / 2) }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: Size.calcAverage(90),
    alignItems: "center",
    marginRight: Size.calcWidth(15),
  },
  cardTitle: {
    fontSize: Size.calcWidth(14),
  },
  container: {
    marginBottom: Size.calcHeight(25),
    marginTop: Size.calcHeight(25 / 2),
  },
  image: {
    height: Size.calcAverage(90),
    width: "100%",
    borderRadius: Size.calcAverage(90 / 2),
    borderColor: colors.white200,
    borderWidth: Size.calcAverage(2),
  },
  title: {
    fontSize: Size.calcWidth(16),
    marginBottom: Size.calcHeight(-15),
    marginLeft: Size.calcWidth(24),
  },
});

export default Highlights;
