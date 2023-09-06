import { fetchFromApi, handleFetchError } from "@twikkl/utils/fetch";
export interface Signup {
  email: string;
  password: string;
  confirmPassword: string;
}
export interface Login {
  email: string;
  password: string;
}
export interface ForgotPassword {
  email: string;
  code: string;
}
export interface ResetPassword {
  email: string;
  password: string;
  confirm_password: string;
  // token: string;
}

export const doSignup = async (formData: Signup) => {
  try {
    const { data } = await fetchFromApi({
      path: "auth/register",
      method: "post",
      body: formData,
    });
    return data;
  } catch (error) {
    handleFetchError(error);
    throw error;
  }
};

export const doLogin = async (formData: Login) => {
  try {
    const { data } = await fetchFromApi({
      path: "auth/login",
      method: "post",
      body: formData,
    });
    return data;
  } catch (error) {
    handleFetchError(error);
    throw error;
  }
};

export const doForgotPassword = async (formData: ForgotPassword) => {
  try {
    const { data } = await fetchFromApi({
      path: "auth/recover-password",
      method: "post",
      body: formData,
    });
    return data;
  } catch (error) {
    handleFetchError(error);
    throw error;
  }
};

export const doResetPassword = async (formData: ResetPassword) => {
  try {
    const { data } = await fetchFromApi({
      path: "auth/reset-password",
      method: "post",
      body: formData,
    });
    return data;
  } catch (error) {
    handleFetchError(error);
    throw error;
  }
};

export const verifyOtp = async (code: string) => {
  try {
    const { data } = await fetchFromApi({
      path: "auth/verify-email",
      method: "post",
      body: { code },
    });
    return data;
  } catch (error) {
    handleFetchError(error);
    throw error;
  }
};

export const getOTP = async () => {
  try {
    const { data } = await fetchFromApi({
      path: "auth/verify-email",
    });
    console.log({ data });
  } catch (error) {
    handleFetchError(error);
    console.log({ otpError: error });
    throw error;
  }
};

export const createUsername = async (username: string) => {
  try {
    const { data } = await fetchFromApi({
      path: "auth/create-username",
      method: "post",
      body: { username },
    });
    return data;
  } catch (error) {
    handleFetchError(error);
    throw error;
  }
};
