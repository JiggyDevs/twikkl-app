// import { useState } from "react";
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Pressable, Image } from "react-native";
// import { Octicons, AntDesign, Ionicons, FontAwesome5, Feather } from "@expo/vector-icons";
// import { useRouter } from "expo-router";
// import Highlights from "@twikkl/components/Discover/Highlights";
// import Card from "@twikkl/components/Discover/Card";
// import { cardDataGroup, cardDataYou } from "@twikkl/data/discover/cardData";
// import ModalEl from "@twikkl/components/ModalEl";
// import ButtonEl from "@twikkl/components/ButtonEl";
// import Scroll from "@twikkl/components/Scrollable";

// export const colors = {
//   green100: "#041105",
//   green200: "#143615",
//   green300: "#50a040",
//   white100: "#F1FCF2",
//   white200: "#ffffff",
// };

// interface Tabs {
//   title: string;
//   icon: JSX.Element;
//   activeIcon: JSX.Element;
// }

// interface Group {
//   id: string;
//   title: string;
//   img: any;
//   smallImg: any;
//   desc: string;
//   members: string;
//   fav?: boolean;
//   status: string;
//   smallGroup: string[];
//   videos: any[];
// }

// const Discover = () => {
//   const [groups, setGroups] = useState<Group[]>(cardDataGroup);
//   const [forYou, setForYou] = useState<Group[]>(cardDataYou);
//   const [fav, setFav] = useState<Group[]>([]);
//   const [render, setRender] = useState("For you");
//   const [selected, setSelected] = useState<Group | null>(null);
//   const [leaveModal, setLeaveModal] = useState(false);
//   const [accessModal, setAccessModal] = useState(false);
//   const router = useRouter();

//   const discoverTabs: Tabs[] = [
//     {
//       title: "For you",
//       activeIcon: <FontAwesome5 name="user-friends" size={22} color={colors.white200} />,
//       icon: <Feather name="users" size={22} color="#000" />,
//     },
//     {
//       title: "Your Groups",
//       activeIcon: <FontAwesome5 name="user-friends" size={22} color={colors.white200} />,
//       icon: <Feather name="users" size={22} color="#000" />,
//     },
//     {
//       title: "Favourites",
//       icon: <Feather name="star" size={22} color="#000" />,
//       activeIcon: <Ionicons name="star" size={22} color={colors.white100} />,
//     },
//   ];

//   const criterias = [
//     { icon: require("../../assets/imgs/bayc.png"), text: "BAYC NFT" },
//     { icon: require("../../assets/imgs/jgy.png"), text: "10 JGY" },
//   ];

//   const pressButton = (item: any) => {
//     setAccessModal(false);
//     const filtered = forYou.filter((ite) => ite.title !== item.title);
//     if (render === "For you") {
//       setForYou(filtered);
//       setGroups((prev) => [item, ...prev]);
//     }
//     return;
//   };

//   const leaveGroup = (item: any) => {
//     setLeaveModal(false);
//     const filtered = groups.filter((ite) => ite.title !== item.title);
//     setGroups(filtered);
//     setForYou((prev) => [item, ...prev]);
//     return;
//   };

//   const favPress = (item: any) => {
//     const updated = groups.map((ite) => (ite.title === item ? { ...ite, fav: !ite.fav } : ite));
//     setGroups(updated);
//     console.log({ updated });
//     setFav(updated.filter((item) => item.fav === true));
//     return;
//   };

//   const renderDisplay = render === "For you" ? forYou : render === "Your Groups" ? groups : fav;

//   const text = render === "For you" ? "For you" : render === "Your Groups" ? "Your groups" : "Favourite groups";

//   return (
//     <View style={{ flex: 1 }}>
//       <View style={styles.header}>
//         <View style={styles.top}>
//           <TouchableOpacity onPressOut={() => router.back()} style={styles.iconContainer}>
//             <Octicons name="chevron-left" size={24} color="#fff" />
//           </TouchableOpacity>
//           <Text style={styles.text}>Groups</Text>

//           <AntDesign name="search1" size={24} />
//         </View>
//         <View style={{ flexDirection: "row" }}>
//           <ScrollView
//             contentContainerStyle={{ alignItems: "center" }}
//             showsHorizontalScrollIndicator={false}
//             horizontal
//           >
//             <TouchableOpacity style={styles.add}>
//               <Ionicons name="add-outline" size={30} color="#fff" />
//             </TouchableOpacity>
//             {discoverTabs.map(({ icon, title, activeIcon }, index) => {
//               return (
//                 <TouchableOpacity
//                   onPressIn={() => setRender(title)}
//                   key={index}
//                   style={[
//                     styles.tab,
//                     render === title && {
//                       backgroundColor: "#50A040",
//                     },
//                   ]}
//                 >
//                   {render === title ? activeIcon : icon}
//                   <Text
//                     style={[
//                       styles.navText,
//                       render === title && {
//                         color: "#fff",
//                       },
//                     ]}
//                   >
//                     {title}
//                   </Text>
//                 </TouchableOpacity>
//               );
//             })}
//           </ScrollView>
//         </View>
//       </View>
//       <Highlights />
//       <View style={{ flex: 1, paddingHorizontal: 16, paddingBottom: 16 }}>
//         <Text style={styles.title}>{text}</Text>
//         <Scroll>
//           {renderDisplay.map((item) => (
//             <Pressable onPress={() => router.push(`/Discover/${item.id}`)}>
//               <Card
//                 onPress={() => {
//                   setAccessModal(true);
//                   setSelected(item);
//                 }}
//                 leaveGroup={() => {
//                   setLeaveModal(true);
//                   setSelected(item);
//                 }}
//                 favPress={() => favPress(item.title)}
//                 forYou={render === "For you"}
//                 {...item}
//               />
//             </Pressable>
//           ))}
//         </Scroll>
//       </View>
//       <ModalEl transparent animate visible={leaveModal}>
//         <View style={styles.modalWrapper}>
//           <View style={styles.modal}>
//             <Text style={{ fontSize: 15 }}>Are you sure you want to leave</Text>
//             <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 6, marginBottom: 22 }}>{selected?.title}</Text>
//             <View style={styles.btnContainer}>
//               <View style={{ width: 100 }}>
//                 <ButtonEl onPress={() => setLeaveModal(false)} outline height={35}>
//                   <Text>cancel</Text>
//                 </ButtonEl>
//               </View>
//               <View style={{ width: 100 }}>
//                 <ButtonEl onPress={() => leaveGroup(selected)} height={35}>
//                   <Text style={{ color: "#fff" }}>Leave</Text>
//                 </ButtonEl>
//               </View>
//             </View>
//           </View>
//         </View>
//       </ModalEl>
//       <ModalEl transparent animate visible={accessModal}>
//         <View style={styles.modalWrapper}>
//           <View style={styles.modal}>
//             <Ionicons name="lock-closed" color="#000" size={35} />
//             <Text style={{ fontWeight: "700", fontSize: 15, marginTop: 8 }}>{selected?.title}</Text>
//             <Text style={{ fontSize: 16, marginBottom: 14, marginTop: 22 }}>Eligibility Criteria</Text>
//             {criterias.map((item) => (
//               <View style={styles.criteria} key={item.text}>
//                 <Text style={{ fontWeight: "700", fontSize: 15 }}>{item.text}</Text>
//                 <Image source={item.icon} />
//               </View>
//             ))}
//             <View style={styles.btnContainer}>
//               <View style={{ width: 160 }}>
//                 <ButtonEl onPress={() => pressButton(selected)} height={40}>
//                   <Text style={{ color: "#fff", fontWeight: "700" }}>Access Group</Text>
//                 </ButtonEl>
//               </View>
//             </View>
//           </View>
//         </View>
//       </ModalEl>
//     </View>
//   );
// };

// export default Discover;

// const styles = StyleSheet.create({
//   add: {
//     backgroundColor: colors.green300,
//     height: 34,
//     width: 36,
//     borderRadius: 50,
//     marginRight: 13,
//     alignItems: "center",
//   },
//   modal: {
//     backgroundColor: "#fff",
//     width: "80%",
//     padding: 32,
//     alignItems: "center",
//     borderRadius: 8,
//   },
//   btnContainer: {
//     flexDirection: "row",
//     gap: 24,
//     justifyContent: "space-between",
//   },
//   criteria: {
//     borderWidth: 1,
//     borderColor: "#000",
//     flexDirection: "row",
//     paddingVertical: 10,
//     paddingHorizontal: 24,
//     borderRadius: 8,
//     justifyContent: "space-between",
//     alignItems: "center",
//     width: "100%",
//     marginBottom: 24,
//   },
//   modalWrapper: {
//     backgroundColor: "rgba(20, 54, 21, 0.5)",
//     justifyContent: "flex-end",
//     alignItems: "center",
//     flex: 1,
//     paddingBottom: 100,
//   },
//   iconContainer: {
//     backgroundColor: "#000",
//     height: 30,
//     width: 30,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 100,
//   },
//   forYou: {
//     fontWeight: "500",
//     marginLeft: 12,
//     marginVertical: 10,
//   },
//   header: {
//     paddingTop: 55,
//     paddingHorizontal: 16,
//   },
//   top: {
//     justifyContent: "space-between",
//     alignItems: "center",
//     flexDirection: "row",
//     marginBottom: 16,
//   },
//   tab: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderRadius: 100,
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     marginRight: 25,
//     gap: 8,
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: "700",
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "500",
//     marginBottom: 15,
//   },
//   navText: {
//     fontFamily: "axiforma",
//     fontWeight: "300",
//     fontSize: 14,
//   },
// });
