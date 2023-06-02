import { Dimensions } from "react-native";

function useResponsiveSize(size: number, otherParams?: string): number {
  const { height, width } = Dimensions.get("window");
  const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];

  const guidelineBaseWidth = 428;
  const guidelineBaseHeight = 926;

  const averageDimension = (longDimension + shortDimension) / 2;

  if (otherParams === "getHeight") return height;
  if (otherParams === "getWidth") return width;

  if (otherParams === "useHeight") return (longDimension / guidelineBaseHeight) * size;

  if (otherParams === "useWidth") return (shortDimension / guidelineBaseWidth) * size;

  return averageDimension / (averageDimension / size);
}

const Size = {
  calcHeight(size: number) {
    return useResponsiveSize(size, "useHeight");
  },

  calcWidth(size: number) {
    return useResponsiveSize(size, "useWidth");
  },

  calcAverage(size: number) {
    return useResponsiveSize(size);
  },

  getHeight() {
    return useResponsiveSize(1, "getHeight");
  },

  getWidth() {
    return useResponsiveSize(1, "getWidth");
  },
};

export default Size;
