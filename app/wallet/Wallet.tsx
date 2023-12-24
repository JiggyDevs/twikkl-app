import Back from "@assets/svg/Back";
import CopyIcon from "@assets/svg/CopyIcon";
import History from "@assets/svg/History";
import InfoIcon from "@assets/svg/Info";
import PlusIcon from "@assets/svg/PlusIcon";
import Receive from "@assets/svg/Receive";
import SetAmountIcon from "@assets/svg/SetAmountIcon";
import Settings from "@assets/svg/Settings";
import ShareIcon from "@assets/svg/ShareIcon";
import Transfer from "@assets/svg/Transfer";
import BackHeader from "@twikkl/components/BackHeader";
import InputField from "@twikkl/components/InputField";
import NFTCard from "@twikkl/components/NFTCard";
import TokenCard from "@twikkl/components/TokenCard";
import { isPriceToken, nfts, receiveNFt, tokens } from "@twikkl/data/constant";
import { useRouter } from "expo-router";
import { ReactElement, useState } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
// import { WalletConnectModal, useWalletConnectModal } from "@walletconnect/modal-react-native";
// import { IBundler, Bundler } from "@biconomy/bundler";
// import { BiconomySmartAccountV2, DEFAULT_ENTRYPOINT_ADDRESS } from "@biconomy/account";
// import { ECDSAOwnershipValidationModule, DEFAULT_ECDSA_OWNERSHIP_MODULE } from "@biconomy/modules";
// import { ethers } from "ethers";
// import { ChainId } from "@biconomy/core-types";

import { Text } from "react-native-paper";

// const projectId = "";

// const providerMetadata = {
//   name: "RN Starter",
//   description: "Biconomy + Wallet Connect RN Starter",
//   url: "https://your-project-website.com/",
//   icons: ["https://your-project-logo.com/"],
//   redirect: {
//     native: "YOUR_APP_SCHEME://",
//     universal: "YOUR_APP_UNIVERSAL_LINK.com",
//   },
// };

type INFT = {
  title: string;
  text: string;
  address: string;
};

const walletOption = [
  { icon: <Transfer />, text: "Transfer" },
  { icon: <Receive />, text: "Receive" },
  { icon: <History />, text: "History" },
];
const nftOption = [
  { icon: <CopyIcon />, text: "Copy" },
  { icon: <SetAmountIcon />, text: "Set Amount" },
  { icon: <ShareIcon />, text: "Share" },
];

const tabs = ["Tokens", "NFTs"];

export default function Wallet(): ReactElement {
  const router = useRouter();
  const [tabState, setTabState] = useState("Tokens");
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [nft, setNft] = useState<Partial<INFT | null>>(null);
  const allTokens = [...tokens, ...isPriceToken];
  const transformedData: { [key: string]: boolean } = {};
  const [data, setData] = useState(transformedData);
  allTokens.forEach(({ name }) => {
    transformedData[name] = false;
  });
  const updateData = (field: string, value: boolean) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const [scwAddress, setScwAddress] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  // const [smartAccount, setSmartAccount] = useState<BiconomySmartAccountV2 | null>(null);

  // const bundler: IBundler = new Bundler({
  //   bundlerUrl: "<from biconomy dashboard>",
  //   chainId: ChainId.POLYGON_MUMBAI,
  //   entryPointAddress: DEFAULT_ENTRYPOINT_ADDRESS,
  // });

  // const { open, isConnected, address, provider } = useWalletConnectModal();

  // const handleButtonPress = async () => {
  //   if (isConnected) {
  //     console.log("yay connections");
  //     return provider?.disconnect();
  //   }
  //   return open();
  // };
  // const connectSmartAccount = async () => {
  //   if (!provider) return;
  //   try {
  //     setLoading(true);
  //     const web3Provider = new ethers.providers.Web3Provider(provider, "any");
  //     const module = await ECDSAOwnershipValidationModule.create({
  //       signer: web3Provider.getSigner(),
  //       moduleAddress: DEFAULT_ECDSA_OWNERSHIP_MODULE,
  //     });
  //     let biconomySmartAccount = await BiconomySmartAccountV2.create({
  //       chainId: ChainId.POLYGON_MUMBAI,
  //       bundler: bundler,
  //       entryPointAddress: DEFAULT_ENTRYPOINT_ADDRESS,
  //       defaultValidationModule: module,
  //       activeValidationModule: module,
  //     });
  //     setScwAddress(await biconomySmartAccount.getAccountAddress());
  //     setSmartAccount(biconomySmartAccount);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <View style={{ paddingTop: 60 }}>
      {search.length ? (
        <View>
          {nft !== null ? (
            <View style={{ paddingHorizontal: 16 }}>
              <BackHeader title={`Receive ${nft.title}`} onPress={() => setNft(null)} />
              <View
                style={{
                  borderRadius: 10,
                  backgroundColor: "grey",
                  padding: 15,
                  alignSelf: "center",
                  alignItems: "center",
                  marginHorizontal: 40,
                  marginTop: 40,
                }}
              >
                <Image source={require("../../assets/imgs/qrCode.png")} />
                <Text style={{ textAlign: "center" }}>{nft.address}</Text>
              </View>
              <View
                style={{
                  backgroundColor: "#F8CF75",
                  padding: 10,
                  borderRadius: 10,
                  alignItems: "center",
                  marginBottom: 30,
                  marginTop: 20,
                }}
              >
                <InfoIcon />
                <Text
                  style={{ textAlign: "center", color: "#000" }}
                >{`Send only ${nft.text} (${nft.title}) to this address. Sending any other coins may result in permanent loss.`}</Text>
              </View>
              <View style={{ flexDirection: "row", gap: 40, alignSelf: "center" }}>
                {nftOption.map((option) => (
                  <View style={{ alignItems: "center" }}>
                    <View style={styles.optionBox}>{option.icon}</View>
                    <Text style={{ color: "#000" }}>{option.text}</Text>
                  </View>
                ))}
              </View>
            </View>
          ) : (
            <View style={{ paddingHorizontal: 16 }}>
              <View style={styles.top}>
                <Back onPress={() => setSearch("")} dark="#041105" />
                <InputField
                  placeholder="Search for people and posts"
                  style={{ flex: 1 }}
                  value={query}
                  onChangeText={(val) => setQuery(val)}
                />
              </View>
              {search === "token" && (
                <View style={{ marginTop: 20, gap: 15 }}>
                  {allTokens.map((token) => (
                    <TokenCard
                      checked={data[token.name]}
                      onToggle={() => updateData(token.name, !data[token.name])}
                      add
                      {...token}
                    />
                  ))}
                </View>
              )}
              {search === "nft" && (
                <View style={{ gap: 10 }}>
                  {receiveNFt.map((nft) => (
                    <Pressable
                      onPress={() => setNft(nft)}
                      style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
                    >
                      <Image source={nft.icon} />
                      <Text style={{ color: "#000" }}>{nft.text}</Text>
                    </Pressable>
                  ))}
                </View>
              )}
            </View>
          )}
        </View>
      ) : (
        <>
          <View style={styles.topHeader}>
            <Back onPress={() => router.push("Home")} dark="#041105" />
            <Text style={styles.boldText}>Wallet</Text>
            <Pressable onPress={() => router.push("wallet/settings")}>
              <Settings />
            </Pressable>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: "#000", fontSize: 30 }}>$4950.80</Text>
            <Text style={{ color: "#000" }}>Balance</Text>
            <View style={{ flexDirection: "row", gap: 20, marginVertical: 20 }}>
              {walletOption.map((option) => (
                <View style={{ alignItems: "center" }}>
                  <View style={styles.optionBox}>{option.icon}</View>
                  <Text style={{ color: "#000" }}>{option.text}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.tabs}>
            {tabs.map((tab) => (
              <Pressable
                style={{
                  borderBottomColor: "#000",
                  borderBottomWidth: tabState === tab ? 3 : 0,
                  paddingBottom: 5,
                  width: 100,
                  alignItems: "center",
                }}
                onPress={() => setTabState(tab)}
              >
                <Text
                  style={{
                    color: tabState === tab ? "green" : "#000",
                  }}
                >
                  {tab}
                </Text>
              </Pressable>
            ))}
          </View>
          <View style={{ padding: 16 }}>
            {tabState === "Tokens" && (
              <>
                <Pressable onPress={() => setSearch("token")} style={{ flexDirection: "row", gap: 10 }}>
                  <PlusIcon />
                  <Text style={{ color: "#000" }}>Add token</Text>
                </Pressable>
                <View style={{ marginTop: 20, gap: 15 }}>
                  {tokens.map((token) => (
                    <TokenCard {...token} />
                  ))}
                </View>
              </>
            )}
            {tabState === "NFTs" && (
              <>
                <Pressable onPress={() => setSearch("nft")} style={{ flexDirection: "row", gap: 10 }}>
                  <PlusIcon />
                  <Text style={{ color: "#000" }}>Receive NFT</Text>
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
              </>
            )}
          </View>
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
    color: "#000",
  },
  optionBox: {
    width: 30,
    height: 30,
    borderRadius: 99,
    backgroundColor: "#50A040",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  tabs: {
    borderBottomColor: "lightgrey",
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
