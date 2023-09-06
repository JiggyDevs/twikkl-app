import { View, Text, StyleSheet, Pressable } from "react-native";
import AuthLayout from "../AuthLayout";
import LabelInput from "@twikkl/components/LabelInput";
import { useSignup } from "@twikkl/hooks/auth.hooks";
import { useLocalSearchParams, useRouter } from "expo-router";
import { signupButtonText, signupDesc, signupHeader } from "../data";
import ConfirmationField from "@twikkl/components/ConfirmationField";
import Signup, { SubSignup } from "./Signup";
import { ViewVariant } from "@twikkl/configs";
import { useEffect, useState } from "react";
import { fetchFromApi, handleFetchError } from "@twikkl/utils/fetch";
import { useAuth } from "@twikkl/entities/auth.entity";
import { getOTP } from "@twikkl/services";

const defaultSignUpData = {
  email: "",
  password: "",
  confirmPassword: "",
  username: "",
  token: "",
};

const Register = () => {
  const router = useRouter();
  const { signupDone = false } = useLocalSearchParams();
  const [suffix, setSuffix] = useState(".jgy");
  const [dropDown, setDropDown] = useState(false);
  const [tc, setTc] = useState(false);
  const {
    form,
    updateField,
    _signup,
    _resendOtp,
    _verifyOtp,
    currentStage,
    setCurrentStage,
    loading,
    _createUsername,
  } = useSignup(defaultSignUpData, Boolean(signupDone));

  const handleClick = () =>
    currentStage === "signup" ? _signup() : currentStage === "verify" ? _verifyOtp() : _createUsername();

  const backClick = () =>
    currentStage === "signup" ? router.push("auth") : currentStage === "verify" ? setCurrentStage("signup") : null;

  const disableButton =
    currentStage === "signup"
      ? !form.email || !form.password || !form.confirmPassword || !tc || loading.signup
      : currentStage === "verify"
      ? form.token.length < 6 || loading.verifyOtp
      : !form.username || loading.username;

  const loadingButton =
    currentStage === "signup" ? loading.signup : currentStage === "verify" ? loading.verifyOtp : loading.username;

  const nameArr = [".jgy", ".eth", ".avax", ".lens"];

  useEffect(() => {
    currentStage === "verify" && getOTP();
  }, [currentStage]);

  return (
    <View style={ViewVariant.wrapper}>
      <AuthLayout
        handleBack={backClick}
        btnText={signupButtonText[currentStage]}
        desc={signupDesc[currentStage]}
        title={signupHeader[currentStage]}
        onPress={handleClick}
        loading={loadingButton}
        disabled={disableButton}
        verify={currentStage === "verify" ? form.email : ""}
      >
        {currentStage === "signup" ? (
          <Signup tc={tc} setTc={setTc} form={form} updateField={updateField} />
        ) : currentStage === "verify" ? (
          <ConfirmationField value={form.token} setValue={(val) => updateField("token", val)} />
        ) : (
          <View>
            <LabelInput
              label="Username"
              username
              NameText={suffix}
              onNamePress={() => setDropDown(!dropDown)}
              placeholder="username"
              value={form.username}
              onChangeText={(val) => updateField("username", val)}
            />
            {dropDown && (
              <View style={styles.dropdown}>
                {nameArr.map((name, index) => (
                  <Pressable
                    key={index}
                    onPress={() => {
                      setDropDown(false);
                      setSuffix(name);
                    }}
                  >
                    <Text style={{ fontSize: 17, color: "#fff" }}>{name}</Text>
                  </Pressable>
                ))}
              </View>
            )}
          </View>
        )}
      </AuthLayout>
      {currentStage === "signup" && <SubSignup />}
      {currentStage === "verify" && (
        <View style={styles.select}>
          <Text>You didn’t receive a code?</Text>
          <Pressable onPress={() => getOTP()}>
            <Text style={styles.resendText}>Resend Code</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  resendText: {
    fontWeight: "500",
    color: "#50A040",
    textDecorationLine: "underline",
  },
  select: {
    flexDirection: "row",
    gap: 4,
    alignSelf: "center",
  },
  dropdown: {
    backgroundColor: "#50A040",
    padding: 10,
    borderRadius: 10,
    gap: 20,
    position: "absolute",
    bottom: -170,
    width: 70,
    right: 0,
  },
});
