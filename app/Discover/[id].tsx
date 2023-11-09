import { View, FlatList, Pressable } from "react-native";
import { useSearchParams } from "expo-router";
import Header from "@twikkl/components/Group/Header";
import VideoCard from "@twikkl/components/Group/VideoCard";
import { cardDataGroup, cardDataYou } from "@twikkl/data/discover/cardData";
import { useState } from "react";
import Search from "@twikkl/components/Discover/Search";
import BigView from "@twikkl/components/Discover/BigView";
import CreateUploadvideo from "../video/CreateUploadVideo";

export interface IGroup {
  desc: string;
  followers?: number;
  img: any;
  title: string;
  members: string;
  fav?: boolean;
  id: string;
  smallImg: any;
  status: string;
  smallGroup: string[];
  videos: any;
}

const Group = (): JSX.Element => {
  const { id } = useSearchParams();
  const groups = [...cardDataYou, ...cardDataGroup];
  const groupData = groups.find((item) => item.id === id);
  const [select, setSelect] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const [bigView, setBigView] = useState(false);
  const [postVideo, setPostVideo] = useState(false);
  const numColumns = select + 1;

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {showSearch ? (
        <Search setShowSearch={setShowSearch} />
      ) : bigView ? (
        <BigView setBigView={setBigView} />
      ) : postVideo ? (
        <CreateUploadvideo group />
      ) : (
        <>
          <Header
            setPostVideo={setPostVideo}
            setShowSearch={setShowSearch}
            select={select}
            setSelect={setSelect}
            {...groupData}
          />
          <View style={{ zIndex: -2, flex: 1 }}>
            <FlatList
              numColumns={numColumns}
              key={numColumns}
              data={groupData?.videos}
              renderItem={({ item, index }) => {
                return (
                  <Pressable onPress={() => setBigView(true)}>
                    <VideoCard numCol={numColumns} videoLink={item} />
                  </Pressable>
                );
              }}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default Group;
