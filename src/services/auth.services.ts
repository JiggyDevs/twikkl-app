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

export const signup = async (formData: Signup) => {
  try {
    const { data } = await fetchFromApi({
      path: "/auth/m-signup",
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
      path: "/auth/m-login",
      method: "post",
      body: formData,
    });
    return data;
  } catch (error) {
    handleFetchError(error);
    throw error;
  }
};
