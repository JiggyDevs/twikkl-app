import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Pressable, Image } from "react-native";
import { Octicons, AntDesign, Ionicons, FontAwesome5, Feather } from "@expo/vector-icons";
import Highlights from "@twikkl/components/Discover/Highlights";
import Card from "@twikkl/components/Discover/Card";
import { cardDataGroup, cardDataYou } from "@twikkl/data/discover/cardData";
import ModalEl from "@twikkl/components/ModalEl";
import { fetchGroups } from "@twikkl/services";
import { useGroupHook, useYourGroupsHook } from "@twikkl/hooks/groups.hooks";
import ButtonEl from "@twikkl/components/ButtonEl";
import Scroll from "@twikkl/components/Scrollable";
import { useRouter } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import CreateGroup from "@twikkl/components/Discover/CreateGroup";

export const colors = {
  green100: "#041105",
  green200: "#143615",
  green300: "#50a040",
  white100: "#F1FCF2",
  white200: "#ffffff",
};

interface Group {
  id: string;
  title: string;
  img: any;
  smallImg: any;
  desc: string;
  members: string;
  fav?: boolean;
  status: string;
  smallGroup: string[];
  videos: any[];
  followers?: number;
}

type ModalType = "access" | "leave" | null;

const Discover = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [, setGroups] = useState<Group[]>(cardDataGroup);
  const [, setYourGroups] = useState<Group[]>(cardDataYou);
  const [favoriteGroups, setFavoriteGroups] = useState<Group[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
  const [createGroup, setCreateGroup] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(null);
  const router = useRouter();

  const { groups } = useGroupHook();
  const { yourGroups } = useYourGroupsHook();

  console.log(yourGroups);
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

  const criterias = [
    { icon: require("../../assets/imgs/bayc.png"), text: "BAYC NFT" },
    { icon: require("../../assets/imgs/jgy.png"), text: "10 JGY" },
  ];

  const pressButton = (item: Group) => {
    setModalType(null);
    if (modalType === "access") {
      const filteredGroups = yourGroups.filter((group) => group?.name !== item?.title);
      setYourGroups(filteredGroups);
      setGroups((prevGroups) => [item, ...prevGroups]);
    } else if (modalType === "leave") {
      const filteredGroups = groups.filter((group) => group.name !== item.title);
      setGroups(filteredGroups);
      setYourGroups((prevGroups) => [item, ...prevGroups]);
    }
  };

  const favPress = (item: Group) => {
    const updated = groups.map((group) => (group.name === item.title ? { ...group, fav: !group.fav } : group));
    setGroups(updated);
    setFavoriteGroups(updated.filter((item) => item.fav === true));
  };

  const renderModalContent = () => (
    <ModalEl transparent animate visible={modalType === "access" || modalType === "leave"}>
      <View style={styles.modalWrapper}>
        <View style={styles.modal}>
          {modalType === "access" ? (
            <>
              <Ionicons name="lock-closed" color="#000" size={35} />
              <Text style={{ fontWeight: "700", fontSize: 15, marginTop: 8 }}>{selectedGroup?.title}</Text>
              <Text style={{ fontSize: 16, marginBottom: 14, marginTop: 22 }}>Eligibility Criteria</Text>
              {criterias.map((item) => (
                <View style={styles.criteria} key={item.text}>
                  <Text style={{ fontWeight: "700", fontSize: 15 }}>{item.text}</Text>
                  <Image source={item.icon} />
                </View>
              ))}
              <View style={{ width: 200 }}>
                <ButtonEl onPress={() => pressButton(selectedGroup)} height={45}>
                  <Text style={{ color: "#fff" }}>Access Group</Text>
                </ButtonEl>
              </View>
            </>
          ) : (
            <>
              <Text style={{ fontSize: 15 }}>Are you sure you want to leave</Text>
              <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 6, marginBottom: 22 }}>
                {selectedGroup?.title}?
              </Text>
              <View style={styles.btnContainer}>
                <View style={{ width: 100 }}>
                  <ButtonEl onPress={() => setModalType(null)} outline height={45}>
                    <Text>Cancel</Text>
                  </ButtonEl>
                </View>
                <View style={{ width: 100 }}>
                  <ButtonEl onPress={() => pressButton(selectedGroup)} height={45}>
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

  const renderDisplay = () => {
    if (activeTabIndex === 0) return groups;
    if (activeTabIndex === 1) return yourGroups;
    if (activeTabIndex === 2) return favoriteGroups;
    return [];
  };

  const titleText = activeTabIndex === 0 ? "For You" : activeTabIndex === 1 ? "Your Groups" : "Favorite Groups";

  return createGroup ? (
    <CreateGroup setCreateGroup={setCreateGroup} />
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
          {renderDisplay().map((item) => (
            <Pressable key={item._id} onPress={() => router.push(`/Discover/${item._id}`)}>
              <Card
                onPress={() => {
                  setModalType("access");
                  setSelectedGroup(item);
                }}
                leaveGroup={() => {
                  setModalType("leave");
                  setSelectedGroup(item);
                }}
                favPress={() => favPress(item)}
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
