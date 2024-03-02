import { isPriceToken, tokens } from "@twikkl/data/constant";
import { useSavedTokenNft } from "@twikkl/entities/tokenNft.entity";
import { useMemo } from "react";

export const useWallet = () => {
  const { savedTokens } = useSavedTokenNft();
  const tokensToDisplay = useMemo(() => {
    return [...tokens, ...isPriceToken].filter((token) => savedTokens.includes(token.name.toLowerCase()));
  }, [savedTokens]);

  return {
    tokensToDisplay,
  };
};
