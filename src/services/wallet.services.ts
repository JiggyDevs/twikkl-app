import { fetchFromApi, handleFetchError, isAxiosError } from "@twikkl/utils/fetch";

type SendFundParams = {
  pin: string;
  toAddress: string;
  amount: number;
};

export const fetchWallets = async () => {
  try {
    const { data } = await fetchFromApi({
      path: "wallets",
    });
    // const computeData = {
    //   ...posts,
    // };
    console.log("walletttt", data);
    return data;
  } catch (error) {
    handleFetchError(error);
    console.log("walletError11", error);

    if (isAxiosError(error)) {
      console.log("walletError", error);

      return error;
    }
    // Handle other types of errors or return a default value
    return {
      data: [],

      // Other properties as needed
    };

    // throw error;
  }
};

export const createWallet = async (pin: string = "1234") => {
  try {
    const { data } = await fetchFromApi({
      method: "post",
      path: "wallets",
      body: { pin },
    });
    // const computeData = {
    //   ...posts,
    // };
    console.log("create- walletttt", data);
    return data;
  } catch (error) {
    handleFetchError(error);
    console.log("createWalletError11", error);

    if (isAxiosError(error)) {
      console.log("walletError", error);

      return error;
    }
    // Handle other types of errors or return a default value
    return {
      data: [],

      // Other properties as needed
    };

    // throw error;
  }
};

export const sendFund = async (sendFundParams: SendFundParams) => {
  try {
    const { data } = await fetchFromApi({
      method: "post",
      path: "wallets/send",
      body: sendFundParams,
    });
    // const computeData = {
    //   ...posts,
    // };
    console.log("send fund", data);
    return data;
  } catch (error) {
    handleFetchError(error);
    console.log("sendFundError", error);

    if (isAxiosError(error)) {
      console.log("sendFundError", error);

      return error;
    }
    // Handle other types of errors or return a default value
    return {
      data: [],

      // Other properties as needed
    };

    // throw error;
  }
};

export const walletDetails = async (pin: string) => {
  try {
    const { data } = await fetchFromApi({
      path: "wallets/details",
      method: "post",
      body: {
        pin,
      },
    });
    // const computeData = {
    //   ...posts,
    // };
    console.log("walletDetails", data);
    return data;
  } catch (error) {
    handleFetchError(error);
    console.log("walletDetailsError", error);

    if (isAxiosError(error)) {
      console.log("walletDetailsError", error);

      return error;
    }
    // Handle other types of errors or return a default value
    return {
      data: [],

      // Other properties as needed
    };

    // throw error;
  }
};

export const isValidWalletPin = async (pin: string) => {
  try {
    const { data } = await fetchFromApi({
      path: "wallets/check-pin",
      method: "post",
      body: {
        pin,
      },
    });
    // const computeData = {
    //   ...posts,
    // };
    console.log("check wallet pin", data);
    return data;
  } catch (error) {
    handleFetchError(error);
    console.log("check wallet pin error", error);

    if (isAxiosError(error)) {
      console.log("check wallet pinError", error);

      return error;
    }
    // Handle other types of errors or return a default value
    return {
      data: [],

      // Other properties as needed
    };

    // throw error;
  }
};
