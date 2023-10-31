import Back from "@assets/svg/Back";
import MoreIcon from "@assets/svg/More";
import BackHeader from "@twikkl/components/BackHeader";
import InputField from "@twikkl/components/InputField";
import NFTCard from "@twikkl/components/NFTCard";
import TokenCard from "@twikkl/components/TokenCard";
import { useRouter } from "expo-router";
import { ReactElement, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

type INFT = {
  title: string;
  text: string;
  address: string;
};

const walletOption = [
  { icon: "", text: "Transfer" },
  { icon: "", text: "Receive" },
  { icon: "", text: "History" },
];
const nftOption = [
  { icon: "", text: "Copy" },
  { icon: "", text: "Set Amount" },
  { icon: "", text: "Share" },
];
const receiveNFt = [
  { icon: "", text: "BNB Smart Chain", title: "BNB", address: "twk1q93awyphd55v9a098dfuijke5rf98dufhnmdfcdt" },
  { icon: "", text: "Ethereum", title: "ETH", address: "twk1q93awyphd55v9a098dfuijke5rf98dufhnmdfcdtjrfi48fjdk" },
  { icon: "", text: "Polygon", title: "PLY", address: "twk1q93awyphd55v9a098dfuijke5rf9" },
  { icon: "", text: "Jiggy", title: "JGY", address: "v9a098dfuijke5rf98dufhnmdfcdtjrfi48fjdk" },
  { icon: "", text: "Avalanche C-Chain", title: "Avalanche", address: "yphd55v9a098dfuijke5rf98dufhnmdfcdtjrfi" },
];
const nfts = [
  { graphic: "", name: "Humanoid #232", token: "ETH" },
  { graphic: "", name: "Trash Panda", token: "BNB" },
  { graphic: "", name: "Degan Ape", token: "BTC" },
  { graphic: "", name: "The Grey Man", token: "JGY" },
];
const tokens = [
  { icon: "", name: "BNB", price: "$210.31", percent: -0.09, fullname: "", quantity: "33 BNB", qtyInDollar: "888 USD" },
  {
    icon: "",
    name: "BTC",
    price: "$21000.31",
    percent: -0.29,
    fullname: "",
    quantity: "0.33 BTC",
    qtyInDollar: "888 USD",
  },
  { icon: "", name: "ETH", price: "$1410.31", percent: 9, fullname: "", quantity: "3 ETH", qtyInDollar: "4000 USD" },
  { icon: "", name: "MATIC", price: "$10.31", percent: -0.9, fullname: "", quantity: "0 MATIC", qtyInDollar: "0 USD" },
  {
    icon: "",
    name: "JGY",
    price: "$25000.31",
    percent: 20,
    fullname: "",
    quantity: "330 JGY",
    qtyInDollar: "8811 USD",
  },
];
const isPriceToken = [
  { icon: "", name: "TRX", price: "", percent: 0, fullname: "Tron", quantity: "0 TRX", qtyInDollar: "0 USD" },
  { icon: "", name: "XRP", price: "", percent: 0, fullname: "Ripple", quantity: "0 XRP", qtyInDollar: "0 USD" },
];
const tabs = ["Tokens", "NFTs"];

export default function Wallet(): ReactElement {
  const router = useRouter();
  const [tabState, setTabState] = useState("Tokens");
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [nft, setNft] = useState<Partial<INFT>>({});

  return (
    <View>
      {search.length ? (
        <View>
          {nft ? (
            <View>
              <BackHeader title={`Receive ${nft.title}`} onPress={() => setNft({})} />
              <View style={{ borderRadius: 10, backgroundColor: "", padding: 10, alignSelf: "center" }}>
                <Text style={{ textAlign: "center" }}>{nft.address}</Text>
              </View>
              <View style={{ backgroundColor: "#F8CF75", padding: 10, borderRadius: 10 }}>
                <Text
                  style={{ textAlign: "center" }}
                >{`Send only ${nft.text} (${nft.title}) to this address. Sending any other coins may result in permanent loss.`}</Text>
              </View>
              <View style={{ flexDirection: "row", gap: 20 }}>
                {nftOption.map((option) => (
                  <View>
                    <View style={styles.optionBox}>{option.icon}</View>
                    <Text>{option.text}</Text>
                  </View>
                ))}
              </View>
            </View>
          ) : (
            <>
              <View style={styles.top}>
                <Back onPress={() => setSearch("")} dark="#041105" />
                {/* <TouchableOpacity onPressOut={() => setShowSearch(false)} style={styles.iconContainer}>
            <Octicons name="chevron-left" size={24} color="#fff" />
            </TouchableOpacity> */}
                <InputField
                  placeholder="Search for people and posts"
                  style={{ flex: 1 }}
                  value={query}
                  onChangeText={(val) => setQuery(val)}
                />
              </View>
              {search === "token" && (
                <View style={{ marginTop: 20, gap: 15 }}>
                  {[...tokens, ...isPriceToken].map((token) => (
                    <TokenCard add {...token} />
                  ))}
                </View>
              )}
              {search === "nft" && (
                <View style={{ gap: 10 }}>
                  {receiveNFt.map((nft) => (
                    <Pressable onPress={() => setNft(nft)} style={{ flexDirection: "row", gap: 10 }}>
                      {nft.icon} <Text>{nft.text}</Text>
                    </Pressable>
                  ))}
                </View>
              )}
            </>
          )}
        </View>
      ) : (
        <>
          <View style={styles.topHeader}>
            <Back onPress={() => router.push("Home")} dark="#041105" />
            <Text style={styles.boldText}>Wallet</Text>
            <MoreIcon />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text>$4950.80</Text>
            <Text>Balance</Text>
            <View style={{ flexDirection: "row", gap: 20 }}>
              {walletOption.map((option) => (
                <View>
                  <View style={styles.optionBox}>{option.icon}</View>
                  <Text>{option.text}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.tabs}>
            {tabs.map((tab) => (
              <Pressable onPress={() => setTabState(tab)}>
                <Text
                  style={{
                    paddingBottom: 10,
                    borderBottomColor: "#000",
                    borderBottomWidth: tabState === tab ? 3 : 0,
                    color: tabState === tab ? "green" : "#000",
                  }}
                >
                  {tab}
                </Text>
              </Pressable>
            ))}
          </View>
          {tabState === "Tokens" && (
            <View>
              <Pressable onPress={() => setSearch("token")} style={{ flexDirection: "row", gap: 10 }}>
                <Text>Add token</Text>
              </Pressable>
              <View style={{ marginTop: 20, gap: 15 }}>
                {tokens.map((token) => (
                  <TokenCard {...token} />
                ))}
              </View>
            </View>
          )}
          {tabState === "NFTs" && (
            <View>
              <Pressable onPress={() => setSearch("nft")} style={{ flexDirection: "row", gap: 10 }}>
                <Text>Receive NFT</Text>
              </Pressable>
              <View
                style={{
                  marginTop: 20,
                  gap: 15,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                {nfts.map((nft) => (
                  <NFTCard {...nft} />
                ))}
              </View>
            </View>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  topHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: "5%",
  },
  boldText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  optionBox: {
    width: 30,
    height: 30,
    borderRadius: 99,
    backgroundColor: "#50A040",
    justifyContent: "center",
    alignItems: "center",
  },
  tabs: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginBottom: 16,
  },
});
