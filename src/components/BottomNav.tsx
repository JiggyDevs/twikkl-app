import {
  StyleSheet,
  TouchableOpacity,
  View,
  ImagePropsBase,
  Image,
  FlatList,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Badge } from "react-native-paper";
import { useRouter } from "expo-router";
import { useColors } from "@twikkl/hooks";

import CommentIcon from "../../assets/svg/comment.svg";
import WalletIcon from "../../assets/svg/wallet.svg";
import ProfileIcon from "../../assets/svg/profile.svg";
import { useTranslation } from "react-i18next";

type BottomNavProps = {
  commentCount: number | string;
};

function BottomNav({ commentCount = 0 }: BottomNavProps, {}) {
  const { t } = useTranslation();

  const router = useRouter();
  return (
    <SafeAreaView style={styles.bottomContainer}>
      <TouchableOpacity style={styles.tabContainer}>
        <View style={{ flexDirection: "row" }}>
          <CommentIcon />
          <Text style={styles.commentCount}>{commentCount}</Text>
        </View>
        <Text variant="titleMedium" style={styles.tabText}>
          {t("comment")}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("Wallet")} style={styles.tabContainer}>
        <WalletIcon />
        <Text variant="titleMedium" style={styles.tabText}>
          {t("wallet")}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("Profile")} style={styles.tabContainer}>
        <ProfileIcon />
        <Text variant="titleMedium" style={styles.tabText}>
          {t("profile")}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default BottomNav;

const styles = StyleSheet.create({
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tabText: {
    color: "#FFF",
    fontSize: 12,
  },
  tabContainer: {
    alignItems: "center",
  },
  commentCount: {
    color: "#FFF",
    fontSize: 12,
    marginLeft: 6,
  },
});
