import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import AuthLayout from "./AuthLayout";
import LabelInput from "@twikkl/components/LabelInput";
import { useLogin } from "@twikkl/hooks/auth.hooks";
import OAuthButton from "@twikkl/components/OAuthButton";
import { useRouter } from "expo-router";
import { ViewVariant } from "@twikkl/configs";
import KeyboardAvoidView from "@twikkl/components/KeyboardAvoidView";

const defaultLoginData = {
  email: "",
  password: "",
};

const Login = () => {
  const router = useRouter();
  const { form, updateField, login, canLogin, requesting } = useLogin(defaultLoginData);

  return (
    <View style={ViewVariant.wrapper}>
      <AuthLayout
        handleBack={() => router.push("auth")}
        btnText="Sign In"
        desc="Just jump back in."
        title="Sign In"
        onPress={() => login()}
        loading={requesting}
        disabled={!canLogin || requesting}
      >
        <>
          <View style={{ gap: 12 }}>
            <LabelInput
              label="Email"
              type="email"
              placeholder="example@gmail.com"
              value={form.email}
              onChangeText={(val) => updateField("email", val)}
            />
            <LabelInput
              label="Password"
              placeholder="password"
              value={form.password}
              type="password"
              onChangeText={(val) => updateField("password", val)}
            />
          </View>
          <Pressable onPress={() => router.push("auth/ForgotPassword")}>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </Pressable>
        </>
      </AuthLayout>
      <View style={styles.option}>
        <Text>Don’t have an account?</Text>
        <Pressable onPress={() => router.push("auth/Register")}>
          <Text style={styles.signUpText}>Sign up</Text>
        </Pressable>
      </View>
      <OAuthButton text="Continue with Google" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  forgot: {
    textAlign: "right",
    fontWeight: "500",
    color: "#50A040",
    textDecorationLine: "underline",
    marginTop: 4,
  },
  signUpText: {
    fontWeight: "500",
    color: "#50A040",
    textDecorationLine: "underline",
  },
  option: {
    flexDirection: "row",
    gap: 4,
    alignSelf: "center",
  },
});
