import { View, Image, StyleSheet } from "react-native";

// import Size from "@twikkl/utility/useResponsiveSize";

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
    paddingHorizontal: 16,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 16,
  },
  image: {
    height: 245,
    width: 450 / 4,
  },
});

export default VideoCard;
