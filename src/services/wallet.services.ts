import { fetchFromApi, handleFetchError, isAxiosError } from "@twikkl/utils/fetch";

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
