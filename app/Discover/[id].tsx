import { View, FlatList, Pressable } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Header from "@twikkl/components/Group/Header";
import VideoCard from "@twikkl/components/Group/VideoCard";
import { useEffect, useState } from "react";
import Search from "@twikkl/components/Discover/Search";
import BigView from "@twikkl/components/Discover/BigView";
import { Group as GroupResponse } from ".";
import CreateUploadvideo from "../video/CreateUploadVideo";
import { useQuery } from "@tanstack/react-query";
import { fetchGroupPosts } from "@twikkl/services";
import { isUserFeedsResponse } from "@twikkl/services/feed.services";
import { groupEntity } from "@twikkl/entities/group.entity";

export interface IGroup {
  description: string;
  followers?: number;
  coverImg: any;
  name: string;
  members: string[];
  fav?: boolean;
  avatar: any;
  categories: string[];
  isPrivate?: boolean;
}

const defaultState = {
  name: "",
  avatar: "",
  coverImg: "",
  description: "",
  _id: "",
  creator: "",
  members: [],
  isDeleted: false,
  isAdminDeleted: false,
  categories: [""],
};
const Group = (): JSX.Element => {
  const { id } = useLocalSearchParams() as { id: string };
  const { group } = groupEntity.use();

  const groupData: GroupResponse = group || defaultState;

  const { data: groupPosts, refetch } = useQuery(["group-post", id], () => fetchGroupPosts(id));
  const videos = isUserFeedsResponse(groupPosts) ? groupPosts.data : [];
  // console.log("fettttch postt", videos, groupPosts);
  // console.log("fettttch postt", id, groupData._id);
  const [select, setSelect] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const [viewPost, setViewPost] = useState<number | null>(null);
  const [bigView, setBigView] = useState(false);
  const [postVideo, setPostVideo] = useState(false);
  const numColumns = select + 1;
  // console.log("====================================");
  // console.log("vidd", videos, "...........");
  // console.log("====================================");
  useEffect(() => {
    refetch();
  }, [postVideo]);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {showSearch ? (
        <Search setShowSearch={setShowSearch} />
      ) : bigView && viewPost !== null ? (
        <BigView setBigView={setBigView} post={videos[viewPost]} refetchComments={refetch} />
      ) : postVideo ? (
        <CreateUploadvideo setPostVideo={setPostVideo} groupCat={groupData.categories} groupId={groupData._id} />
      ) : (
        <>
          <Header
            setPostVideo={setPostVideo}
            setShowSearch={setShowSearch}
            select={select}
            setSelect={setSelect}
            {...groupData}
          />
          <View style={{ zIndex: -2, flex: 1, marginBottom: 20 }}>
            <FlatList
              numColumns={numColumns}
              key={numColumns}
              data={videos}
              renderItem={({ item, index }) => {
                return (
                  <Pressable
                    onPress={() => {
                      setViewPost(index);
                      setBigView(true);
                    }}
                  >
                    <VideoCard numCol={numColumns} videoLink={item.contentUrl} />
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
