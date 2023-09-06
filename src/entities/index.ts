import { entity } from "simpler-state";

type TCaller =
  | "login"
  | "signUp"
  | "forgot-password"
  | "verify-otp"
  | "reset-password"
  | "username"
  | "create-username"
  | null;

type IState = {
  isRequesting: {
    status: boolean;
    caller?: TCaller;
  };
  loading: boolean;
};

const defaultState: IState = {
  isRequesting: {
    caller: null,
    status: false,
  },
  loading: false,
};

export const twikklEntity = entity(defaultState);

export const requestStarted = (caller?: TCaller) =>
  twikklEntity.set((currentState: any) => ({
    ...currentState,
    isRequesting: {
      status: true,
      caller,
    },
  }));

export const requestEnded = () =>
  twikklEntity.set((currentState: any) => ({
    ...currentState,

    isRequesting: {
      status: false,

      caller: null,
    },
  }));

export const showLoader = () =>
  twikklEntity.set((currentState: any) => ({
    ...currentState,
    loading: true,
  }));

export const hideLoader = () =>
  twikklEntity.set((currentState: any) => ({
    ...currentState,
    loading: false,
  }));

export const useTwikklEntity = () => {
  const { isRequesting, loading } = twikklEntity.use();

  return {
    isRequesting: (caller: TCaller) => isRequesting.status && isRequesting.caller === caller,
    loading,
  };
};
