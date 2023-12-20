import { View, FlatList, Pressable } from "react-native";
import { useSearchParams } from "expo-router";
import Header from "@twikkl/components/Group/Header";
import VideoCard from "@twikkl/components/Group/VideoCard";
import { useState } from "react";
import Search from "@twikkl/components/Discover/Search";
import BigView from "@twikkl/components/Discover/BigView";
import { Group as GroupResponse } from ".";
import CreateUploadvideo from "../video/CreateUploadVideo";
import { useQuery } from "@tanstack/react-query";
import { fetchGroupPosts } from "@twikkl/services";
import { isUserFeedsResponse } from "@twikkl/services/feed.services";

export interface IGroup {
  description: string;
  followers?: number;
  img: any;
  title: string;
  members: string[];
  fav?: boolean;
  id: string;
  smallImg: any;
  status: string;
  smallGroup: string[];
  videos: any;
}

const Group = (): JSX.Element => {
  const { id, group } = useSearchParams() as { id: string; group: string };

  const groupData: GroupResponse = JSON.parse(group || "{}");
  const { data: groupPosts } = useQuery(["group-post", id], () => fetchGroupPosts(id));
  const videos = isUserFeedsResponse(groupPosts) ? groupPosts.data : [];

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
            img={undefined}
            status=""
            smallGroup={[]}
            videos={undefined}
            title={groupData.name}
            id={id}
            setPostVideo={setPostVideo}
            setShowSearch={setShowSearch}
            select={select}
            smallImg={groupData.avatar}
            setSelect={setSelect}
            {...groupData}
          />
          <View style={{ zIndex: -2, flex: 1 }}>
            <FlatList
              numColumns={numColumns}
              key={numColumns}
              data={videos}
              renderItem={({ item }) => {
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
