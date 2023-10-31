import { View, Text, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { Octicons } from "@expo/vector-icons";
import InputField from "../InputField";
import People from "@assets/svg/People";
import NotifCard from "../NotifCard";
import Play from "@assets/svg/Play";

const searchArr = [
  { icon: <People />, title: "Search people" },
  { icon: <Play dark="#000" />, title: "Search post" },
];

const cardArr = [
  {
    text: "jordiofficial.jgy",
    avatar: require("../../../assets/imgs/avatar1.png"),
    img: null,
  },
  {
    text: "lacy.lens",
    img: require("../../../assets/imgs/notif1.png"),
    desc: "liked your video.",
    avatar: require("../../../assets/imgs/avatar3.png"),
  },
  {
    text: "deborah.jgy",
    avatar: require("../../../assets/imgs/avatar1.png"),
    img: null,
  },
  {
    text: "stella.jgy",
    avatar: require("../../../assets/imgs/avatar6.png"),
    img: require("../../../assets/imgs/notif3.png"),
    desc: "liked your video.",
  },
  {
    text: "jordiomaxwellfficial.jgy",
    avatar: require("../../../assets/imgs/avatar1.png"),
    img: null,
  },
  {
    text: "maxwell.jgy",
    avatar: require("../../../assets/imgs/avatar5.png"),
    img: require("../../../assets/imgs/notif1.png"),
    desc: "liked your video.",
  },
];

const Search = ({ setShowSearch }: { setShowSearch: Function }) => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const filterPost = cardArr.filter((item) => item.img !== null);
  const filterPeople = cardArr.filter((item) => item.img === null);
  const newSearch = search === "Search people" ? filterPeople : search === "Search post" ? filterPost : cardArr;

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity onPressOut={() => setShowSearch(false)} style={styles.iconContainer}>
          <Octicons name="chevron-left" size={24} color="#fff" />
        </TouchableOpacity>
        <InputField
          placeholder="Search for people and posts"
          style={{ flex: 1 }}
          value={query}
          onChangeText={(val) => setQuery(val)}
        />
      </View>
      <Text style={{ fontWeight: "700" }}>Refine your search</Text>
      <View style={[styles.top, { marginTop: 8, marginBottom: 20 }]}>
        {searchArr.map((item) => (
          <Pressable
            key={item.title}
            style={[styles.select, { backgroundColor: item.title === search ? "#50A040" : "transparent" }]}
            onPress={() => setSearch(item.title)}
          >
            {item.icon}
            <Text style={{ fontSize: 12 }}>{item.title}</Text>
          </Pressable>
        ))}
      </View>
      {newSearch.map((item) => (
        <NotifCard like {...item} />
      ))}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: "#F1FCF2",
    flex: 1,
  },
  iconContainer: {
    backgroundColor: "#000",
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginBottom: 16,
  },
  select: {
    borderColor: "#50A040",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    gap: 10,
  },
});
