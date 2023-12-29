import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  ImageBackground,
  Pressable,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons, FontAwesome5, Octicons, AntDesign, Ionicons } from "@expo/vector-icons";
import { colors } from "../../../app/Discover/index";
import { IGroup } from "../../../app/Discover/[id]";
import PlayUpload from "@assets/svg/PlayUpload";
import { imgArr } from "../Discover/Card";
import GroupSettings from "@assets/svg/GroupSettings";
import Grid1 from "@assets/svg/Grid1";
import { useRouter } from "expo-router";
import MenuIcon from "@assets/svg/Menu";
import ArrowDown from "@assets/svg/ArrowDown";
import { useState } from "react";
import Grid3 from "@assets/svg/Grid3";
import Grid2 from "@assets/svg/Grid2";

interface Header extends IGroup {
  select: number;
  setSelect: Function;
  setShowSearch: Function;
  setPostVideo: Function;
}

const Header = ({
  title,
  description,
  members,
  img,
  smallImg,
  status,
  smallGroup,
  select,
  setSelect,
  setShowSearch,
  setPostVideo,
}: Header): JSX.Element => {
  const { height } = Dimensions.get("window");
  const [dropDown, setDropDown] = useState(false);
  const router = useRouter();
  const gridArr = [<Grid1 />, <Grid2 />, <Grid3 />];
  return (
    <View>
      <ImageBackground style={[styles.bannerImage, { height: height * 0.32 }]} source={{ uri: img }}>
        <TouchableOpacity onPressOut={() => router.back()} style={styles.iconContainer}>
          <Octicons name="chevron-left" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={{ flexDirection: "row", gap: 26 }}>
          <AntDesign onPress={() => setShowSearch(true)} name="search1" size={24} />
          <MenuIcon />
        </View>
      </ImageBackground>
      <View style={styles.container}>
        <Image style={styles.profilePicture} source={{ uri: smallImg }} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={[styles.horizontal, styles.detailsContainer]}>
          <View style={styles.horizontal}>
            <View style={styles.horizontal}>
              <MaterialCommunityIcons name="lock" size={20} color={colors.white100} />
              <Text style={styles.details}>{status}</Text>
            </View>
            <View style={[styles.horizontal, { marginLeft: 10 }]}>
              <FontAwesome5 name="user-friends" size={17} color={colors.white200} />
              <Text style={styles.details}>{members.length} members</Text>
            </View>
          </View>
          <View style={[styles.horizontal, { gap: 10 }]}>
            <View style={[styles.horizontal]}>
              {imgArr.map((img, index) => {
                return <Image key={index} source={img} style={[styles.avatar, index === 0 && { marginLeft: 0 }]} />;
              })}
            </View>
            <TouchableOpacity style={styles.add}>
              <Ionicons name="add-outline" size={28} color="#50A040" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView horizontal>
        {smallGroup?.map((topic, index) => {
          return (
            <TouchableOpacity key={index} style={[styles.topicsButton]}>
              <Text>{topic}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View style={{ backgroundColor: "#000", marginBottom: 16 }}>
        <View style={styles.actionContainer}>
          <View style={styles.horizontal}>
            <Image source={require("../../../assets/imgs/smallImg1.png")} style={styles.actionAvatar} />
            <PlayUpload onPress={() => setPostVideo(true)} />
          </View>
          <View style={[styles.horizontal, { gap: 20 }]}>
            <Pressable onPress={() => setDropDown(!dropDown)} style={[styles.horizontal, { gap: 7 }]}>
              <GroupSettings />
              <ArrowDown />
            </Pressable>
            <View style={styles.gridWrapper}>{gridArr[select]}</View>
          </View>
          {dropDown && (
            <View style={styles.dropdown}>
              {gridArr.map((grid, index) => (
                <Pressable
                  onPress={() => {
                    setDropDown(false);
                    setSelect(index);
                  }}
                >
                  {grid}
                </Pressable>
              ))}
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  add: {
    backgroundColor: "#fff",
    height: 30,
    width: 30,
    borderRadius: 20,
    alignItems: "center",
  },
  gridWrapper: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#50A040",
    padding: 3,
  },
  actionAvatar: {
    height: 36,
    width: 36,
    marginRight: 16,
  },
  dropdown: {
    backgroundColor: "lightgrey",
    padding: 10,
    borderRadius: 10,
    gap: 13,
    position: "absolute",
    bottom: -80,
    width: 50,
    right: 50,
  },
  actionContainer: {
    backgroundColor: "#fff",
    marginVertical: 4,
    paddingVertical: 8,
    flexDirection: "row",
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  avatar: {
    borderRadius: 17.5,
    height: 35,
    width: 35,
    marginLeft: -15,
  },
  bannerImage: {
    paddingTop: 60,
    paddingHorizontal: 17,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    backgroundColor: "#50A040",
    paddingHorizontal: 16,
  },
  description: {
    fontSize: 13,
    color: "#fff",
  },
  details: {
    marginLeft: 5,
    color: "#fff",
  },
  detailsContainer: {
    marginTop: 8,
    marginBottom: 16,
    justifyContent: "space-between",
  },
  horizontal: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePicture: {
    borderRadius: 35,
    height: 100,
    width: 100,
    marginTop: -50,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 33,
    marginBottom: 4,
    color: "#fff",
  },
  topicsButton: {
    paddingVertical: 6,
    marginVertical: 8,
    paddingHorizontal: 15,
    marginLeft: 16,
    borderColor: colors.green300,
    borderWidth: 1,
    borderRadius: 100,
  },
  iconContainer: {
    backgroundColor: "#000",
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
});
export default Header;
