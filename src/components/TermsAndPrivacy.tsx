import Checkbox from "expo-checkbox";
import { View, Text, StyleSheet, Pressable } from "react-native";

const TermsAndPrivacy = ({ tc, setTc }: { tc: boolean; setTc: Function }) => {
  return (
    <View style={styles.selectWrapper}>
      <Checkbox color="#50A040" value={tc} onValueChange={() => setTc(!tc)} />
      <View style={styles.select}>
        <Text>I agree to</Text>
        <Pressable>
          <Text style={styles.greenText}>Terms of Service</Text>
        </Pressable>
        <Text>and</Text>
        <Pressable>
          <Text style={styles.greenText}>Privacy Policy</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TermsAndPrivacy;

const styles = StyleSheet.create({
  greenText: {
    fontWeight: "500",
    color: "#50A040",
    textDecorationLine: "underline",
  },
  select: {
    flexDirection: "row",
    gap: 4,
    alignSelf: "center",
  },
  selectWrapper: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    marginTop: 16,
  },
});
