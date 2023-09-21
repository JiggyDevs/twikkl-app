import Back from "@assets/svg/Back";
import { Avatar } from "react-native-paper";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import ListItem from "@twikkl/components/ListItem";
import ToggleButton from "@twikkl/components/ToggleButton";
import { useState } from "react";
import { ResizeMode, Video } from "expo-av";
import styled from "styled-components/native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import ArrowDown from "@assets/svg/ArrowDown";
import People from "@assets/svg/People";

const SubscribeOption = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #1f1f1f;
  padding: ${hp(1.6)}px ${wp(2.3)}px;
  border-radius: 15px;
`;
const Option = styled.View`
  border: 2px solid #fff;
  border-radius: 99px;
  width: ${wp(4.65)}px;
  height: ${hp(2.14)}px;
`;

const CaptionVideo = ({ videoUri, setCaption }: { videoUri: string; setCaption: Function }) => {
  const [data, setData] = useState({
    events: true,
    marketPlace: true,
    postFeed: true,
  });
  const updateData = (field: string, value: boolean) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };
  const [shouldPlay, setShouldPlay] = useState(false);
  const [subData, setSubData] = useState<{ name: string; price: string }>();
  const [captionText, setCaptionText] = useState("");
  const [options, setOptions] = useState(false);
  const optionsArray = [
    { icon: "", title: "Followers", desc: "Only those who follow you or those you follow will see this post." },
    { icon: "", title: "Public", desc: "This post will be visible to everyone on the network." },
    { icon: "", title: "Private", desc: "This post will only be seen by you." },
  ];
  const tagArr = ["# Hashtags", "@ Tag Friends"];
  return (
    <View style={{ paddingHorizontal: 16 }}>
      <View style={styles.topHeader}>
        <Pressable onPress={() => setCaption(false)}>
          <Back dark="#041105" />
        </Pressable>
        <Text style={styles.boldText}>Post</Text>
        <View style={{ width: 20 }} />
      </View>
      <View style={styles.post}>
        <View style={styles.nameAvatar}>
          <Avatar.Image size={34} source={require("../../assets/imgs/avatar1.png")} />
          <View>
            <Text style={{ fontWeight: "600", fontSize: 15 }}>@glorypraise.eth</Text>
            <Pressable style={styles.select} onPress={() => setOptions(true)}>
              <People />
              <Text style={{ fontSize: 12 }}>Followers</Text>
              <ArrowDown color="#000" />
            </Pressable>
          </View>
        </View>
        <View style={styles.bgGreen}>
          <Text style={styles.textWhite}>Post</Text>
        </View>
      </View>
      {/* {options && (
          <View>
            {optionsArray.map(({ icon, title }) => (
              <Pressable
                key={title}
                // onPress={() => setSubData(title)}
              >
                <SubscribeOption>
                  <Option
                  // style={{
                  //   backgroundColor: title === subData.title ? "#fff" : "transparent",
                  // }}
                  />
                  <Text>{icon}</Text>
                  <Text>{title}</Text>
                </SubscribeOption>
              </Pressable>
            ))}
          </View>
        )} */}
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
      <ListItem
        title="Save post to device"
        action={<ToggleButton checked={data.postFeed} onToggle={() => updateData("postFeed", !data.postFeed)} />}
      />
      <ListItem
        title="Allow Duet"
        action={<ToggleButton checked={data.events} onToggle={() => updateData("events", !data.events)} />}
      />
      <ListItem
        title="Allow Stitch"
        action={
          <ToggleButton checked={data.marketPlace} onToggle={() => updateData("marketPlace", !data.marketPlace)} />
        }
      />
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
  topHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tags: {
    flexDirection: "row",
    gap: 15,
    paddingBottom: 20,
    marginBottom: 20,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  },
  boldText: {
    fontSize: 20,
    fontWeight: "bold",
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
});
