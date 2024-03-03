import { entity, persistence } from "simpler-state";
import { remoteStorage } from "./entityHelpers";

interface TokenNftEntity {
  savedTokens: string[]; // list of token addresses that is added to dashboard by user
}

const defaultTokens = ["bnb", "btc", "eth", "matic", "jgy"];

const defaultState: TokenNftEntity = {
  savedTokens: defaultTokens,
};

export const tokenNftEntity = entity(defaultState, [
  persistence("tokens_nft", {
    storage: remoteStorage,
    serializeFn: (val) => JSON.stringify(val),
    deserializeFn: (val) => (val === "null" ? {} : JSON.parse(val)),
  }),
]);

export const updateToken = (tokenName: string, type: "add" | "remove") =>
  tokenNftEntity.set((currentTokenNft) => {
    const updatedToken =
      type === "add"
        ? currentTokenNft.savedTokens.concat(tokenName.toLowerCase())
        : type === "remove"
        ? currentTokenNft.savedTokens.filter((token) => token.toLowerCase() !== tokenName.toLowerCase())
        : currentTokenNft.savedTokens;
    return {
      ...currentTokenNft,
      savedTokens: updatedToken,
    };
  });

export const addToken = (tokenName: string) =>
  tokenNftEntity.set((currentTokenNft) => {
    return {
      ...currentTokenNft,
      savedTokens: currentTokenNft.savedTokens.concat(tokenName.toLowerCase()),
    };
  });

export const setTokenDefault = () => {
  const tokens = tokenNftEntity.get();
  if (tokens.savedTokens === undefined) {
    return tokenNftEntity.set((currentTokenNft) => {
      return {
        ...currentTokenNft,
        savedTokens: defaultTokens,
      };
    });
  }
};

export const removeToken = (tokenName: string) =>
  tokenNftEntity.set((currentTokenNft) => {
    return {
      ...currentTokenNft,
      savedTokens: currentTokenNft.savedTokens.filter((token) => token.toLowerCase() !== tokenName.toLowerCase()),
    };
  });

export const useSavedTokenNft = () => {
  const _tokenNftEntity = tokenNftEntity.use();

  return {
    ..._tokenNftEntity,
    isSavedToken: (tokenName: string) => _tokenNftEntity.savedTokens.includes(tokenName.toLowerCase()),
  };
};
