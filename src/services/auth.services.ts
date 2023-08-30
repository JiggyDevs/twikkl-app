import { fetchFromApi, handleFetchError } from "@twikkl/utils/fetch";

export interface Signup {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
  token: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface ForgotPassword {
  email: string;
  // password: string;
  // confirmPassword: string;
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

export const doForgotPassword = async (email: ForgotPassword) => {
  try {
    const { data } = await fetchFromApi({
      path: "auth/recover-password",
      method: "post",
      body: email,
    });
    return data;
  } catch (error) {
    handleFetchError(error);
    throw error;
  }
};
