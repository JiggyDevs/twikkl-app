import { View, Image, StyleSheet, FlatList } from "react-native";
import { useSearchParams } from "expo-router";

// import URLS from "@assets/data/discover/URLS";
// import Size from "@twikkl/utility/useResponsiveSize";
// import colors from "@twikkl/configs/colors";
import Header from "@twikkl/components/Group/Header";
import VideoCard from "@twikkl/components/Group/VideoCard";
import { colors } from ".";
import URLS from "@twikkl/data/discover/URLS";
// import AppText from "@twikkl/components/AppText";

const topics = [
  "artificial intelligence",
  "coding",
  "ui design",
  "front-end development",
  "back-end development",
  "mobile-application development",
];

const Group = (): JSX.Element => {
  const { group } = useSearchParams();
  const numColumns = 3;
  return (
    <>
      <FlatList
        numColumns={numColumns}
        key={numColumns}
        data={Array(5).fill(0)}
        ListHeaderComponent={() => <Header />}
        style={{ backgroundColor: colors.green100 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ index }) => {
          return <VideoCard videoLink={URLS.food} key={index} />;
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  );
};

export default Group;
