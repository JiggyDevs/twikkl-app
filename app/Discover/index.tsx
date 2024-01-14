import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Pressable } from "react-native";
import { Octicons, AntDesign, Ionicons, FontAwesome5, Feather } from "@expo/vector-icons";
import Highlights from "@twikkl/components/Discover/Highlights";
import Card from "@twikkl/components/Discover/Card";
import ModalEl from "@twikkl/components/ModalEl";
import { useGroupHook, useYourFavouriteGroupsHook, useYourGroupsHook } from "@twikkl/hooks/groups.hooks";
import ButtonEl from "@twikkl/components/ButtonEl";
import Scroll from "@twikkl/components/Scrollable";
import { useRouter } from "expo-router";
import { Groups, createGroup, favouriteGroup, joinGroup, leaveGroup, unfavouriteGroup } from "@twikkl/services";
import CreateGroup from "@twikkl/components/Discover/CreateGroup";
import { hideLoader, showLoader } from "@twikkl/entities";
import { toastSuccess } from "@twikkl/utils/common";
import { useUploadPhoto } from "@twikkl/hooks/upload-hook";
import { updateGroup } from "@twikkl/entities/group.entity";

export const colors = {
  green100: "#041105",
  green200: "#143615",
  green300: "#50a040",
  white100: "#F1FCF2",
  white200: "#ffffff",
};

// const criterias = [
//   { icon: require("../../assets/imgs/bayc.png"), text: "BAYC NFT" },
//   { icon: require("../../assets/imgs/jgy.png"), text: "10 JGY" },
// ];

export interface Group extends Groups {}

interface GroupsObject {
  [key: string]: Group[];
}
const discoverTabs = [
  {
    title: "For you",
    activeIcon: <FontAwesome5 name="user-friends" size={22} color={colors.white200} />,
    icon: <Feather name="users" size={22} color="#000" />,
  },
  {
    title: "Your Groups",
    activeIcon: <FontAwesome5 name="user-friends" size={22} color={colors.white200} />,
    icon: <Feather name="users" size={22} color="#000" />,
  },
  {
    title: "Favorites",
    icon: <Feather name="star" size={22} color="#000" />,
    activeIcon: <Ionicons name="star" size={22} color={colors.white100} />,
  },
];

type ModalType = "access" | "leave" | null;

const Discover = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
  const [showCreateGroup, setCreateGroup] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(null);
  const router = useRouter();

  const { groups, refetch: groupsRefetch } = useGroupHook();

  const { yourGroups, refetch: yourGroupsRefetch } = useYourGroupsHook();

  const { favouriteGroups, refetch: favouriteGroupRefetch } = useYourFavouriteGroupsHook();

  const { _uploadPhoto } = useUploadPhoto();

  const handleCreateGroup = async (data: {
    name: string;
    description: string;
    coverImg: string;
    isPrivate: boolean;
    avatar: string;
    categories: string[];
  }) => {
    showLoader();

    const [coverImg, avatar] = await Promise.all([_uploadPhoto(data.coverImg), _uploadPhoto(data.avatar)]);

    if (coverImg && avatar) {
      const response = await createGroup({
        name: data.name,
        description: data.description,
        avatar: avatar.url,
        categories: data.categories,
        isPrivate: data.isPrivate,
        coverImg: coverImg.url,
      });

      hideLoader();
      if (response) {
        setCreateGroup(false);
        toastSuccess("Group created successfully");
        yourGroupsRefetch();
        groupsRefetch();
      }
    }
  };

  const pressButton = async (item: Group) => {
    setModalType(null);
    if (modalType === "access") {
      showLoader();

      const response = await joinGroup(item._id);

      if (response) {
        groupsRefetch();
        yourGroupsRefetch();
        toastSuccess("Group joined successfully");
      }

      hideLoader();
    } else if (modalType === "leave") {
      showLoader();

      const response = await leaveGroup(item._id);

      if (response) {
        groupsRefetch();
        yourGroupsRefetch();
        toastSuccess("Group joined successfully");
      }

      hideLoader();
    }
  };

  const favPress = async (item: Group, isChecked: boolean) => {
    if (isChecked) {
      return favouriteGroup(item._id).then(() => {
        groupsRefetch();
        yourGroupsRefetch();
        favouriteGroupRefetch();
      });
    }
    unfavouriteGroup(item._id).then(() => {
      groupsRefetch();
      yourGroupsRefetch();
      favouriteGroupRefetch();
    });
    // const updated = groups.map((group) => (group.name === item.title ? { ...group, fav: !group.fav } : group));
  };

  const renderModalContent = () => (
    <ModalEl transparent animate visible={modalType === "access" || modalType === "leave"}>
      <View style={styles.modalWrapper}>
        <View style={styles.modal}>
          {modalType === "access" ? (
            <>
              {/* <Ionicons name="lock-closed" color="#000" size={35} /> */}
              <Text style={{ fontWeight: "700", fontSize: 15, marginTop: 8 }}>{selectedGroup?.name}</Text>
              {/* <Text style={{ fontSize: 16, marginBottom: 14, marginTop: 22 }}>Eligibility Criteria</Text>
              {criterias.map((item) => (
                <View style={styles.criteria} key={item.text}>
                  <Text style={{ fontWeight: "700", fontSize: 15 }}>{item.text}</Text>
                  <Image source={item.icon} />
                </View>
              ))} */}
              <View style={{ width: 200, marginTop: 20 }}>
                <ButtonEl onPress={() => selectedGroup && pressButton(selectedGroup)} height={45}>
                  <Text style={{ color: "#fff" }}>Access Group</Text>
                </ButtonEl>
              </View>
            </>
          ) : (
            <>
              <Text style={{ fontSize: 15 }}>Are you sure you want to leave</Text>
              <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 6, marginBottom: 22 }}>
                {selectedGroup?.name}?
              </Text>
              <View style={styles.btnContainer}>
                <View style={{ width: 100 }}>
                  <ButtonEl onPress={() => setModalType(null)} outline height={45}>
                    <Text>Cancel</Text>
                  </ButtonEl>
                </View>
                <View style={{ width: 100 }}>
                  <ButtonEl onPress={() => selectedGroup && pressButton(selectedGroup)} height={45}>
                    <Text style={{ color: "#fff" }}>Leave</Text>
                  </ButtonEl>
                </View>
              </View>
            </>
          )}
        </View>
      </View>
    </ModalEl>
  );

  const getFavouriteGroups = favouriteGroups.map((group) => group.group);

  const getGroups: GroupsObject = {
    "0": groups,
    "1": yourGroups,
    "2": yourGroups.filter((group) => getFavouriteGroups.includes(group._id)),
  };

  // const navigation = useNavigation();
  const titleText = activeTabIndex === 0 ? "For You" : activeTabIndex === 1 ? "Your Groups" : "Favorite Groups";

  return showCreateGroup ? (
    <CreateGroup setCreateGroup={setCreateGroup} handleCreateGroup={handleCreateGroup} />
  ) : (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.top}>
          <TouchableOpacity onPressOut={() => router.back()} style={styles.iconContainer}>
            <Octicons name="chevron-left" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.text}>Groups</Text>
          <AntDesign name="search1" size={24} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <ScrollView
            contentContainerStyle={{ alignItems: "center" }}
            showsHorizontalScrollIndicator={false}
            horizontal
          >
            <TouchableOpacity onPress={() => setCreateGroup(true)} style={styles.addButton}>
              <Ionicons name="add-outline" size={30} color="#fff" />
            </TouchableOpacity>
            {discoverTabs.map(({ icon, title, activeIcon }, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setActiveTabIndex(index)}
                style={[styles.tab, activeTabIndex === index && styles.activeTab]}
              >
                {activeTabIndex === index ? activeIcon : icon}
                <Text style={[styles.navText, activeTabIndex === index && styles.activeNavText]}>{title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
      <Highlights />
      <View style={styles.groupContainer}>
        <Text style={styles.text}>{titleText}</Text>
        <Scroll>
          {getGroups[`${activeTabIndex}`].map((item) => (
            <Pressable
              key={item._id}
              onPress={() => {
                updateGroup(item);
                router.push({
                  pathname: `/Discover/${item._id}`,
                });
              }}
            >
              <Card
                onPress={() => {
                  setModalType("access");
                  setSelectedGroup(item);
                }}
                leaveGroup={() => {
                  setModalType("leave");
                  setSelectedGroup(item);
                }}
                fav={getFavouriteGroups.includes(item._id)}
                favPress={(checked: boolean) => favPress(item, checked)}
                forYou={activeTabIndex === 0}
                {...item}
              />
            </Pressable>
          ))}
        </Scroll>
      </View>
      {renderModalContent()}
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({
  header: {
    paddingTop: 55,
    paddingHorizontal: 16,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  iconContainer: {
    backgroundColor: "#000",
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
  },
  addButton: {
    backgroundColor: colors.green300,
    height: 34,
    width: 36,
    borderRadius: 50,
    marginRight: 13,
    alignItems: "center",
  },
  navText: {
    fontFamily: "axiforma",
    fontWeight: "300",
    fontSize: 14,
  },
  activeNavText: {
    color: "#fff",
  },
  tab: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    gap: 8,
    marginRight: 5,
  },
  activeTab: {
    borderRadius: 100,
    backgroundColor: "#50A040",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 15,
  },
  modalWrapper: {
    backgroundColor: "rgba(20, 54, 21, 0.5)",
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    paddingBottom: 100,
  },
  modal: {
    backgroundColor: "#fff",
    width: "80%",
    padding: 32,
    alignItems: "center",
    borderRadius: 8,
  },
  btnContainer: {
    flexDirection: "row",
    gap: 24,
    justifyContent: "space-between",
  },
  criteria: {
    borderWidth: 1,
    borderColor: "#000",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 24,
  },
  groupContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});
