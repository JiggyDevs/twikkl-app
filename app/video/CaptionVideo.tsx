// import Back from "@assets/svg/Back";
import { Avatar } from "react-native-paper";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import ListItem from "@twikkl/components/ListItem";
import ToggleButton from "@twikkl/components/ToggleButton";
import { useCallback, useState } from "react";
import { ResizeMode, Video } from "expo-av";
// import styled from "styled-components/native";
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import ArrowDown from "@assets/svg/ArrowDown";
// import { authEntity } from "@twikkl/entities/auth.entity";
import { usePostHook } from "@twikkl/hooks/post.hooks";
import People from "@assets/svg/People";
import Key from "@assets/svg/Key";
import Globe from "@assets/svg/Globe";
import Dropdown from "@twikkl/components/Dropdown";
import { ViewVariant } from "@twikkl/configs";
import BackHeader from "@twikkl/components/BackHeader";
import { fetchCategories } from "@twikkl/services";
import { useQuery } from "@tanstack/react-query";

// const SubscribeOption = styled.View`
//   flex-direction: row;
//   align-items: center;
//   padding: ${hp(1.6)}px ${wp(2.3)}px;
// `;
// const OptionWrapper = styled.View`
//   border: 2px solid #fff;
//   border-radius: 99px;
//   width: ${wp(6)}px;
//   height: ${hp(2.8)}px;
//   align-items: center;
//   justify-content: center;
// `;
// const Option = styled.View`
//   border-radius: 99px;
//   width: ${wp(3.5)}px;
//   height: ${hp(1.6)}px;
// `;

const CaptionVideo = ({ videoUri, setCaption, group }: { videoUri: string; setCaption: Function; group?: string }) => {
  const [data, setData] = useState({
    device: true,
    duet: true,
    stitch: true,
  });

  // const { user } = authEntity.get();

  const { _createPost } = usePostHook();

  const updateData = (field: string, value: boolean) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const [selectedCategory, setSelectedCategory] = useState("");
  const [shouldPlay, setShouldPlay] = useState(false);
  const [category, setCategory] = useState(false);
  const [subData, setSubData] = useState("Followers");

  const [captionText, setCaptionText] = useState("");
  const [options, setOptions] = useState(false);

  const optionsArray = [
    {
      icon: <People color="#fff" />,
      title: "Followers",
      desc: "Only those who follow you or those you follow will see this post.",
    },
    { icon: <Globe />, title: "Public", desc: "This post will be visible to everyone on the network." },
    { icon: <Key />, title: "Private", desc: "This post will only be seen by you." },
  ];

  const handleFetchCategories = useCallback(async () => {
    const response = await fetchCategories();
    if (response) {
      return response.data;
    }
  }, []);

  const { data: allCategories } = useQuery(["categories"], () => handleFetchCategories());

  const tagArr = ["# Hashtags", "@ Tag Friends"];
  const categories = allCategories?.map((categ) => categ.name);

  return (
    <View style={{ paddingHorizontal: 16 }}>
      <BackHeader title="Post" onPress={() => setCaption(false)} />
      <View style={styles.post}>
        <View style={styles.nameAvatar}>
          <Avatar.Image size={34} source={require("../../assets/imgs/avatar1.png")} />
          <View>
            <Text style={{ fontWeight: "600", fontSize: 15 }}>@glorypraise.eth</Text>
            <View>
              <Pressable style={styles.select} onPress={() => setOptions(!options)}>
                <People />
                <Text style={{ fontSize: 12 }}>{group ? "Group" : subData}</Text>
                {!group && <ArrowDown color="#000" />}
              </Pressable>
            </View>
          </View>
        </View>
        <Pressable
          disabled={!captionText}
          onPress={() =>
            _createPost({
              contentUrl: videoUri,
              description: captionText,
              groupId: group,
              categoryId: allCategories?.find((categ) => categ.name === selectedCategory)?._id,
              tags: [],
            })
          }
        >
          <View style={styles.bgGreen}>
            <Text style={styles.textWhite}>Post</Text>
          </View>
        </Pressable>
      </View>
      {!group && <Dropdown options={options} optionsArray={optionsArray} setSubData={setSubData} subData={subData} />}
      {/* <View style={{ zIndex: 1 }}>
        {options && (
          <View style={styles.optionsWrapper}>
            {optionsArray.map(({ icon, title, desc }) => (
              <Pressable key={title} onPress={() => setSubData(title)}>
                <SubscribeOption>
                  <Text style={{ width: 23 }}>{icon}</Text>
                  <View style={{ flex: 1, paddingHorizontal: 20 }}>
                    <Text style={styles.optionText}>{title}</Text>
                    <Text style={{ color: "#50A040", fontSize: 12 }}>{desc}</Text>
                  </View>
                  <OptionWrapper>
                    <Option
                      style={{
                        backgroundColor: title === subData ? "#fff" : "transparent",
                        padding: 5,
                      }}
                    />
                  </OptionWrapper>
                </SubscribeOption>
              </Pressable>
            ))}
          </View>
        )}
      </View> */}
      <TextInput
        multiline
        value={captionText}
        onChangeText={(val) => setCaptionText(val)}
        placeholder="Give your video a caption..."
        style={{ maxHeight: 100, fontSize: 15 }}
      />
      <Pressable onPress={() => setShouldPlay(!shouldPlay)} style={styles.videoWrapper}>
        <Video
          shouldPlay={shouldPlay}
          source={{ uri: videoUri }}
          resizeMode={ResizeMode.COVER}
          style={[StyleSheet.absoluteFill, styles.video]}
          onError={(error) => console.log("Video Error:", error)}
        />
      </Pressable>
      <View style={styles.tags}>
        {tagArr.map((tag) => (
          <View key={tag} style={styles.select}>
            <Text>{tag}</Text>
          </View>
        ))}
      </View>
      {group && (
        <View style={{ marginBottom: 15 }}>
          {category && (
            <View style={styles.optionsWrapper}>
              <Text style={{ fontSize: 18, color: "#fff" }}>Category</Text>
              {categories &&
                categories.map((item) => (
                  <Pressable
                    onPress={() => {
                      setSelectedCategory(item);
                      setCategory(false);
                    }}
                    key={item}
                  >
                    <Text style={styles.optionText}>{item}</Text>
                  </Pressable>
                ))}
            </View>
          )}
          <Pressable onPress={() => setCategory(!category)} style={ViewVariant.rowSpaceBetween}>
            <View>
              <Text>Category</Text>
              <Text style={{ color: "#50A040", fontSize: 10 }}>Select a category in which your video fits.</Text>
            </View>
            <ArrowDown />
          </Pressable>
        </View>
      )}
      <ListItem
        title="Save post to device"
        action={<ToggleButton checked={data.device} onToggle={() => updateData("postFeed", !data.device)} />}
      />
      {!group && (
        <>
          <ListItem
            title="Allow Duet"
            action={<ToggleButton checked={data.duet} onToggle={() => updateData("events", !data.duet)} />}
          />
          <ListItem
            title="Allow Stitch"
            action={<ToggleButton checked={data.stitch} onToggle={() => updateData("marketPlace", !data.stitch)} />}
          />
        </>
      )}
    </View>
  );
};

export default CaptionVideo;

const styles = StyleSheet.create({
  post: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  select: {
    borderColor: "#50A040",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginTop: 4,
  },
  videoWrapper: { height: 250, marginVertical: 10 },
  tags: {
    flexDirection: "row",
    gap: 15,
    paddingBottom: 20,
    marginBottom: 20,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  },
  video: { borderRadius: 16, width: "100%", height: "100%" },
  bgGreen: {
    height: 40,
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: "#50A040",
    borderRadius: 24,
  },
  textWhite: {
    fontWeight: "700",
    fontSize: 14,
    color: "#F1FCF2",
  },
  nameAvatar: {
    flexDirection: "row",
    gap: 16,
  },
  optionsWrapper: {
    position: "absolute",
    backgroundColor: "#143615",
    width: "100%",
    gap: 20,
    borderRadius: 8,
    bottom: 40,
    padding: 15,
  },
  optionText: {
    fontSize: 15,
    color: "#fff",
  },
});
