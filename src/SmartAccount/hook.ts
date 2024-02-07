// import { useEffect } from "react";
// import { UserSmartAccount } from "./helper";

import { useQuery } from "@tanstack/react-query";
import { fetchWallets } from "@twikkl/services/wallet.services";

// export const useSmartAccount = () => {
//   useEffect(() => {
//     UserSmartAccount.test();
//   }, []);
// };
export const useWalletHook = () => {
  const { data: wallet, isLoading, ...rest } = useQuery(["wallet-details"], () => fetchWallets());

  console.log("walletHere", wallet);

  return {
    ...rest,
    walletDetails: wallet,
    isLoading,
  };
};
