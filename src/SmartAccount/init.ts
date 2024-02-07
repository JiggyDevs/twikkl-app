// import { IBundler, Bundler } from "@biconomy/bundler";
// import { DEFAULT_ENTRYPOINT_ADDRESS } from "@biconomy/account";
// // import { ethers } from "ethers";
// import { ChainId } from "@biconomy/core-types";
// import { magicKey } from "@twikkl/utils/config";
// import { Magic } from "magic-sdk";
// import { BiconomyPaymaster, IPaymaster } from "@biconomy/paymaster";

// // export const bundler: IBundler = new Bundler({
// //   bundlerUrl: "https://bundler.biconomy.io/api/v2/80001/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44",
// //   chainId: ChainId.POLYGON_MUMBAI,
// //   entryPointAddress: DEFAULT_ENTRYPOINT_ADDRESS,
// // });

// // export const provider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/polygon_mumbai");

// // export const wallet = new ethers.Wallet(privateKey || "", provider);

// // Initialize the Magic instance
// export const magic = new Magic(magicKey, {
//   network: {
//     rpcUrl: "",
//     chainId: ChainId.POLYGON_MUMBAI, // or preferred chain
//   },
// });

// export const bundler: IBundler = new Bundler({
//   bundlerUrl: `https://bundler.biconomy.io/api/v2/${ChainId.POLYGON_MUMBAI}/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44`,
//   chainId: ChainId.POLYGON_MUMBAI,
//   entryPointAddress: DEFAULT_ENTRYPOINT_ADDRESS,
// });

// export const paymaster: IPaymaster = new BiconomyPaymaster({
//   // get from biconomy dashboard https://dashboard.biconomy.io/
//   paymasterUrl: "https://paymaster.biconomy.io/api/v1/80001/K7yOEuI7P.bbf40658-4e61-45c2-9bfc-75deec28662d",
// });
