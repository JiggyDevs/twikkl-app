import { Image, Dimensions } from "react-native";

interface Props {
  videoLink: any;
  numCol: number;
}

const VideoCard = ({ videoLink, numCol }: Props): JSX.Element => {
  const { width, height } = Dimensions.get("window");
  const cardWidth = (width - 10 * numCol) / numCol;
  const separator = width * 0.012;
  return (
    <Image
      resizeMode="cover"
      source={videoLink}
      style={{
        height: height * 0.15,
        width: cardWidth,
        margin: separator,
        alignSelf: "center",
      }}
    />
  );
};

export default VideoCard;
