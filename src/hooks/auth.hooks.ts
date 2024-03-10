import { hideLoader, requestEnded, requestStarted, showLoader, useTwikklEntity } from "@twikkl/entities";
import { clearAuth, setAuth, setToken } from "@twikkl/entities/auth.entity";
import {
  createUsername,
  doForgotPassword,
  doLogin,
  doResetPassword,
  doSignup,
  Login,
  verifyOtp,
} from "@twikkl/services";
import { isValidFormSubmit, toastSuccess } from "@twikkl/utils/common";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useFormField } from "./common.hooks";

export type TRegStage = "signup" | "verify" | "username";

export const useSignup = <T extends Record<any, any>>(defaultForm: T, signupDone: boolean) => {
  const { form, updateField } = useFormField(defaultForm);
  const { email, password, username, confirmPassword, token } = form;
  const { isRequesting } = useTwikklEntity();
  const router = useRouter();
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
      email,
      password,
      confirmPassword,
    };
    try {
      const data = await doSignup(formDataToUse);
      console.log({ signData: data });
      toastSuccess(data.message);
      setToken(data.token);
      setCurrentStage("verify");
    } catch (error) {
      console.log({ signupError: error });
    } finally {
      requestEnded();
      hideLoader();
    }
  };

  const _verifyOtp = async () => {
    requestStarted("verify-otp");
    showLoader();
    try {
      const data = await verifyOtp(token);
      console.log({ verifyOtpData: data });
      toastSuccess(data.message);
      setCurrentStage("username");
      setAuth(data.data, data.token);
    } catch (error) {
      console.log({ verifyOtpError: error });
    } finally {
      requestEnded();
      hideLoader();
    }
  };

  const _createUsername = async () => {
    requestStarted("create-username");
    showLoader();
    try {
      const data = await createUsername(username);
      console.log({ createUsername: data });
      toastSuccess(data.message);
      router.push("Home");
    } catch (error) {
      console.log({ usernameError: error });
    } finally {
      requestEnded();
      hideLoader();
    }
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
    _createUsername,
  };
};

export const useLogin = <T extends Login>(defaultForm: T) => {
  const { isRequesting } = useTwikklEntity();
  const { form, updateField } = useFormField(defaultForm);
  const router = useRouter();
  const canLogin = isValidFormSubmit(form);
  const requesting = isRequesting("login");

  const login = async () => {
    showLoader();
    requestStarted("login");
    try {
      const data = await doLogin(form);
      console.log("loginData", data);
      setAuth(data.data, data.token);
      toastSuccess(data.message);
      router.push("Home");
    } catch (error: any) {
      if (error.response?.data.message === "email is not verified") {
        setToken(error.response?.data.token);
        router.push({ pathname: "auth/Register", params: { signupDone: true } });
      }
      console.log("loginError", error.response?.data);
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
  const { token, email, password, confirm_password } = form;

  const loading = {
    forgotPassword: isRequesting("forgot-password"),
    verifyOtp: isRequesting("verify-otp"),
    resetPassword: isRequesting("reset-password"),
  };

  const forgotPassword = async () => {
    requestStarted("forgot-password");
    showLoader();
    const formData = {
      email,
      // code: token,
    };
    try {
      const data = await doForgotPassword(formData);
      console.log({ forgotData: data });
      toastSuccess(data.message);
      stage === "forgot" ? setStage("verify") : setStage("reset");
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
    //   setStage("reset");
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
      // token: "4312eca6cfd1924a1af2f10eb51aa67f45ee44af7ea0019938c37583cc85ff16",
      password,
      confirm_password,
    };
    try {
      const data = await doResetPassword(resetPasswordData);
      console.log({ resetPasswordData: data });
      toastSuccess(data.message);
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
