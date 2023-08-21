import { entity, persistence } from "simpler-state";
import { remoteStorage } from "./entityHelpers";

export type TUser = {
  id: string;
  email: string;
  phone: string;
  name: string;
};

export type IAuthEntity = {
  token: null | string;
  user: TUser | null;
  userEmail: string;
};

const defaultState: IAuthEntity = {
  token: null,
  user: null,
  userEmail: "",
};

export const authEntity = entity(defaultState, [
  persistence("twikklAuth", {
    storage: remoteStorage,
    serializeFn: (val) => JSON.stringify(val),
    deserializeFn: (val) => (val === "null" ? {} : JSON.parse(val)),
  }),
]);

export const setAuth = (user: TUser, token: string) =>
  authEntity.set((currentData: any) => ({
    ...currentData,
    user,
    token,
  }));

export const setEmail = (userEmail: string) =>
  authEntity.set((currentData: any) => ({
    ...currentData,
    userEmail,
  }));

export const setToken = (token: string) =>
  authEntity.set((auth: any) => ({
    ...auth,
    token,
  }));

export const getToken = () => authEntity.get().token;

export const setUser = (user: TUser) =>
  authEntity.set((auth: any) => ({
    ...auth,
    user,
  }));

export const setAuthToDefault = () => {
  authEntity.set(defaultState);
};

export const clearAuth = () => {
  authEntity.set((currentAuth: any) => ({
    ...currentAuth,
    user: null,
    token: null,
  }));
};

export const useAuth = () => {
  const auth: IAuthEntity = authEntity.use();
  return {
    isLoggedIn: Boolean(auth?.token && auth?.user),
    user: auth?.user,
    email: auth?.userEmail,
  };
};
