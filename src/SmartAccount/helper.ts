// import { BiconomySmartAccountV2, DEFAULT_ENTRYPOINT_ADDRESS } from "@biconomy/account";
// import { ChainId } from "@biconomy/core-types";
// import { ECDSAOwnershipValidationModule, DEFAULT_ECDSA_OWNERSHIP_MODULE } from "@biconomy/modules";
// import { ethers } from "ethers";
// import { paymaster, bundler, magic } from "./init";

// type PaymentSetup = {
//   to: string;
//   amount: string;
// };

// export class UserSmartAccount {
//   // static async createWallet() {
//   //   const module = await ECDSAOwnershipValidationModule.create({
//   //     signer: wallet,
//   //     moduleAddress: DEFAULT_ECDSA_OWNERSHIP_MODULE,
//   //   });

//   //   const biconomyAccount = await BiconomySmartAccountV2.create({
//   //     chainId: ChainId.POLYGON_MUMBAI,
//   //     bundler,
//   //     entryPointAddress: DEFAULT_ENTRYPOINT_ADDRESS,
//   //     defaultValidationModule: module,
//   //     activeValidationModule: module,
//   //   });

//   //   // Log the EOA owner's address and the Smart Account address
//   //   console.log("EOA Owner Address:", wallet.address);
//   //   console.log("Smart Account Address:", await biconomyAccount.getAccountAddress());

//   //   return biconomyAccount;
//   // }

//   static async create() {
//     try {
//       await magic.wallet.connectWithUI();
//       const web3Provider = new ethers.providers.Web3Provider(magic.rpcProvider, "any");

//       const module = await ECDSAOwnershipValidationModule.create({
//         signer: web3Provider.getSigner(),
//         moduleAddress: DEFAULT_ECDSA_OWNERSHIP_MODULE,
//       });

//       const biconomySmartAccount = await BiconomySmartAccountV2.create({
//         chainId: ChainId.POLYGON_MUMBAI,
//         bundler,
//         paymaster,
//         entryPointAddress: DEFAULT_ENTRYPOINT_ADDRESS,
//         defaultValidationModule: module,
//         activeValidationModule: module,
//       });

//       const address = await biconomySmartAccount.getAccountAddress();
//       console.log("====================================");
//       console.log({ address });
//       console.log("====================================");
//       return { biconomySmartAccount, address };
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   static test() {
//     console.log("hereeee");
//   }

//   static async buildUserOp(smartAccount: BiconomySmartAccountV2, paymentSetup?: PaymentSetup) {
//     try {
//       const transaction = {
//         to: paymentSetup?.to ?? "0x322Af0da66D00be980C7aa006377FCaaEee3BDFD",
//         data: "0x",
//         value: ethers.utils.parseEther(paymentSetup?.amount ?? "0.01"),
//       };

//       const userOp = await smartAccount.buildUserOp([transaction]);
//       userOp.paymasterAndData = "0x";
//       return userOp;
//     } catch (error: unknown) {
//       if (error instanceof Error) {
//         console.error("Error building user operation:", error.message);
//       }
//     }
//   }

//   static async send(smartAccount: BiconomySmartAccountV2) {
//     try {
//       const userOp = await this.buildUserOp(smartAccount);
//       if (!userOp) {
//         console.error("Error: Could not create the user operation.");
//         return;
//       }

//       // Send the user operation and wait for the transaction to complete
//       const userOpResponse = await smartAccount.sendUserOp(userOp);
//       const transactionDetails = await userOpResponse.wait();

//       console.log("See your transaction details here:");
//       console.log(`https://mumbai.polygonscan.com/tx/${transactionDetails.receipt.transactionHash}`);
//     } catch (error: unknown) {
//       if (error instanceof Error) {
//         console.error("Transaction Error:", error.message);
//       }
//     }
//   }
// }
