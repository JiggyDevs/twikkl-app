import { View, Text, Pressable, StyleSheet } from "react-native";
import LabelInput from "@twikkl/components/LabelInput";
import { Signup as ISignup } from "@twikkl/services";
import Checkbox from "expo-checkbox";
import OAuthButton from "@twikkl/components/OAuthButton";
import { useRouter } from "expo-router";
import TermsAndPrivacy from "@twikkl/components/TermsAndPrivacy";

export function SubSignup() {
  const router = useRouter();
  return (
    <View>
      <View style={styles.select}>
        <Text>Already have an account?</Text>
        <Pressable onPress={() => router.push("auth/Login")}>
          <Text style={styles.greenText}>Login</Text>
        </Pressable>
      </View>
      <OAuthButton text="Sign up with Google" />
    </View>
  );
}

const Signup = ({
  form,
  updateField,
  tc,
  setTc,
}: {
  form: ISignup;
  updateField: Function;
  tc: boolean;
  setTc: Function;
}) => {
  return (
    <View>
      <View style={{ gap: 12 }}>
        <LabelInput
          label="Email"
          placeholder="example@gmail.com"
          value={form.email}
          onChangeText={(val) => updateField("email", val)}
        />
        <LabelInput
          label="Password"
          placeholder="password"
          value={form.password}
          onChangeText={(val) => updateField("password", val)}
          type="password"
        />
        <LabelInput
          label="Confirm Password"
          placeholder="password"
          value={form.confirmPassword}
          type="password"
          onChangeText={(val) => updateField("confirmPassword", val)}
        />
      </View>
      <TermsAndPrivacy setTc={setTc} tc={tc} />
      {/* <View style={styles.selectWrapper}>
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
      </View> */}
    </View>
  );
};

export default Signup;

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
  // selectWrapper: {
  //   flexDirection: "row",
  //   gap: 12,
  //   alignItems: "center",
  //   marginTop: 16,
  // },
});
