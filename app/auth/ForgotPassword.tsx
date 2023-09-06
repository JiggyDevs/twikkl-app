import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import AuthLayout from "./AuthLayout";
import LabelInput from "@twikkl/components/LabelInput";
import { useForgotPassword } from "@twikkl/hooks/auth.hooks";
import { useRouter } from "expo-router";
import { forgotButtonText, forgotDesc, forgotHeader } from "./data";
import ConfirmationField from "@twikkl/components/ConfirmationField";
import { ViewVariant } from "@twikkl/configs";

const defaultForm = {
  email: "",
  token: "",
  password: "",
  confirm_password: "",
};

const ForgotPassword = () => {
  const router = useRouter();
  const { stage, setStage, updateField, form, forgotPassword, _verifyOtp, _resendOtp, _resetPassword, loading } =
    useForgotPassword(defaultForm);

  const handleClick = () => (stage === "reset" ? _resetPassword() : forgotPassword());

  const backClick = () =>
    stage === "forgot" ? router.push("auth/Login") : stage === "verify" ? setStage("forgot") : null;

  const disableButton =
    stage === "forgot"
      ? !form.email || loading.forgotPassword
      : stage === "verify"
      ? form.token.length < 6 || loading.verifyOtp
      : !form.password || !form.confirm_password || loading.resetPassword;

  const loadingButton =
    stage === "forgot" ? loading.forgotPassword : stage === "verify" ? loading.verifyOtp : loading.resetPassword;

  return (
    <View style={ViewVariant.wrapper}>
      <AuthLayout
        handleBack={backClick}
        btnText={forgotButtonText[stage]}
        desc={forgotDesc[stage]}
        title={forgotHeader[stage]}
        verify={stage === "verify" ? form.email : ""}
        onPress={handleClick}
        loading={loadingButton}
        disabled={disableButton}
      >
        {stage === "forgot" ? (
          <LabelInput
            label="Email"
            placeholder="example@gmail.com"
            value={form.email}
            onChangeText={(val) => updateField("email", val)}
          />
        ) : stage === "verify" ? (
          <ConfirmationField value={form.token} setValue={(val) => updateField("token", val)} />
        ) : (
          <View style={{ gap: 12 }}>
            <LabelInput
              label="Create Password"
              placeholder="password"
              value={form.password}
              onChangeText={(val) => updateField("password", val)}
              type="password"
            />
            <LabelInput
              label="Re-enter Password"
              placeholder="password"
              value={form.confirm_password}
              type="password"
              onChangeText={(val) => updateField("confirm_password", val)}
            />
          </View>
        )}
      </AuthLayout>
      {stage === "verify" && (
        <View style={styles.option}>
          <Text>You didn’t receive the email?</Text>
          <Pressable>
            <Text style={styles.resendText}>Click to resend</Text>
          </Pressable>
        </View>
      )}
      <Pressable onPress={() => router.push("auth/Login")}>
        <Text style={styles.login}>Return to Login</Text>
      </Pressable>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  forgot: {
    textAlign: "right",
    fontWeight: "500",
    color: "#50A040",
    textDecorationLine: "underline",
    marginTop: 4,
  },
  login: {
    fontWeight: "700",
    color: "#50A040",
    fontSize: 15,
    textAlign: "center",
  },
  resendText: {
    fontWeight: "500",
    color: "#50A040",
    textDecorationLine: "underline",
  },
  option: {
    flexDirection: "row",
    gap: 4,
    alignSelf: "center",
    marginBottom: 25,
  },
});
