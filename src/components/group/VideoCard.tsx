import { View, Image, StyleSheet } from "react-native";

import Size from "@twikkl/utility/useResponsiveSize";

interface Props {
  videoLink: string;
}

const VideoCard = ({ videoLink }: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image resizeMode="cover" source={{ uri: videoLink }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Size.calcWidth(16),
    borderRadius: Size.calcAverage(10),
    overflow: "hidden",
    marginBottom: Size.calcHeight(16),
  },
  image: {
    height: Size.calcHeight(245),
    width: Size.getWidth() / 4,
  },
});

export default VideoCard;
