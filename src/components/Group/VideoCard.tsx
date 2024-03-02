import { s5ClientAuthToken } from "@twikkl/utils/config";
import { ResizeMode, Video } from "expo-av";
import { Dimensions } from "react-native";

interface Props {
  videoLink: any;
  numCol: number;
}

const VideoCard = ({ videoLink, numCol }: Props): JSX.Element => {
  const { width, height } = Dimensions.get("window");
  const cardWidth = (width - 10 * numCol) / numCol;
  const separator = width * 0.012;
  const cardHeight = numCol === 1 ? height * 0.25 : height * 0.15;
  return (
    <Video
      source={{
        uri: `${videoLink}?auth_token=${s5ClientAuthToken}`,
      }}
      shouldPlay={false}
      isLooping
      resizeMode={ResizeMode.COVER}
      style={{ width: cardWidth, height: cardHeight, margin: separator, alignSelf: "center", borderRadius: 10 }}
    />
  );
};

export default VideoCard;
