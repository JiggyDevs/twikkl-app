import { hideLoader, requestEnded, requestStarted, showLoader, useTwikklEntity } from "@twikkl/entities";
import { setAuth, useAuth } from "@twikkl/entities/auth.entity";
import { doForgotPassword, doLogin, doSignup, Login } from "@twikkl/services";
import { isValidFormSubmit, toastSuccess } from "@twikkl/utils/common";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useFormField } from "./common.hooks";

export type TRegStage = "signup" | "verify" | "username";

export const useSignup = <T extends Record<any, any>>(defaultForm: T, signupDone: boolean) => {
  const { form, updateField } = useFormField(defaultForm);
  const { email, password, username, confirmPassword, token } = form;
  const { isRequesting } = useTwikklEntity();
  const { email: authEmail } = useAuth();
  const startStage = signupDone ? "verify" : "signup";
  const [currentStage, setCurrentStage] = useState<TRegStage>(startStage);

  const loading = {
    signup: isRequesting("signUp"),
    verifyOtp: isRequesting("verify-otp"),
    username: isRequesting("username"),
  };

  const _signup = async () => {
    requestStarted("signUp");
    showLoader();
    const formDataToUse = {
      username,
      token,
      email,
      password,
      confirmPassword,
    };
    try {
      const data = await doSignup(formDataToUse);
      console.log({ signData: data });
      toastSuccess(data.message);
      setCurrentStage("verify");
    } catch (error) {
      console.log({ signupError: error });
    } finally {
      requestEnded();
      hideLoader();
    }
  };

  const _verifyOtp = async () => {
    // requestStarted("verify-otp");
    // showLoader();
    // const dataToUse = {
    //   token,
    //   email: email || authEmail,
    // };
    // try {
    //   const data = await verifyOtp(dataToUse);
    //   console.log({ verifyOtpData: data });
    //   toastSuccess(data.message);
    setCurrentStage("username");
    // setAuth(data.data.user, data.data.token);
    // } catch (error) {
    //   console.log({ verifyOtpError: error });
    // } finally {
    //   requestEnded();
    //   hideLoader();
    // }
  };

  const _resendOtp = async () => {
    // showLoader();
    // const emailToUse = {
    //   email: email || authEmail,
    // };
    // try {
    //   await resendOtp(emailToUse);
    // } catch (error) {
    // } finally {
    //   hideLoader();
    // }
  };

  return {
    _signup,
    _verifyOtp,
    _resendOtp,
    form,
    updateField,
    loading,
    currentStage,
    setCurrentStage,
  };
};

export const useLogin = <T extends Login>(defaultForm: T) => {
  const { isRequesting } = useTwikklEntity();
  const { form, updateField } = useFormField(defaultForm);
  const router = useRouter();
  const canLogin = isValidFormSubmit(form);
  const requesting = isRequesting("login");
  // const { email } = form;

  const login = async () => {
    showLoader();
    requestStarted("login");
    try {
      const data = await doLogin(form);
      console.log("loginData", data);
      setAuth(data.data.user, data.data.token);
      router.push("Home");
      toastSuccess(data.message);
      // if (data.message === 'Please verify your email before you can continue') {
      //   setEmail(email);
      //   resendOtp({ email });
      //   navigation.navigate('Register', { signupDone: true });
      // }
    } catch (error: any) {
      console.log("loginError", error);
    } finally {
      requestEnded();
      hideLoader();
    }
  };
  return {
    login,
    requesting,
    form,
    updateField,
    canLogin,
  };
};

export const useForgotPassword = <T extends Record<any, any>>(defaultForm: T) => {
  const [stage, setStage] = useState<"verify" | "forgot" | "reset">("forgot");
  const router = useRouter();
  const { form, updateField } = useFormField(defaultForm);
  const { isRequesting } = useTwikklEntity();
  const { token, email, new_password } = form;

  const loading = {
    forgotPassword: isRequesting("forgot-password"),
    verifyOtp: isRequesting("verify-otp"),
    resetPassword: isRequesting("reset-password"),
  };

  const forgotPassword = async () => {
    requestStarted("forgot-password");
    showLoader();
    try {
      const data = await doForgotPassword({ email });
      console.log({ forgotData: data });
      toastSuccess(data.message);
      setStage("verify");
    } catch (error) {
      console.log({ forgotPasswordError: error });
    } finally {
      requestEnded();
      hideLoader();
    }
  };

  const _resendOtp = async () => {
    showLoader();
    try {
      // const data = await doForgotPassword({ email });
      // console.log({ resendOtpData: data });
      toastSuccess("OTP resent, check your phone");
    } catch (error) {
      console.log({ resendOtpError: error });
    } finally {
      hideLoader();
    }
  };

  const _verifyOtp = async () => {
    // requestStarted("verify-otp");
    // showLoader();
    // try {
    //   const data = await forgotPasswordOTP({ token, email });
    //   console.log({ verifyOtpData: data });
    //   toastSuccess(data.message);
    setStage("reset");
    // } catch (error) {
    //   console.log({ verifyOtpError: error });
    // } finally {
    //   requestEnded();
    //   hideLoader();
    // }
  };

  const _resetPassword = async () => {
    requestStarted("reset-password");
    showLoader();
    const resetPasswordData = {
      email,
      token,
      new_password,
    };
    try {
      // const data = await resetPassword(resetPasswordData);
      // console.log({ resetPasswordData: data });
      // toastSuccess(data.message);
      router.push("auth/Login");
    } catch (error) {
      console.log({ resendOtpError: error });
    } finally {
      requestEnded();
      hideLoader();
    }
  };

  return {
    forgotPassword,
    _verifyOtp,
    _resendOtp,
    _resetPassword,
    form,
    updateField,
    loading,
    stage,
    setStage,
  };
};
