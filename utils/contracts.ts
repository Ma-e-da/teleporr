import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";

const nftContractAddress = "0x14762b4E358e14f725C5787601CF5249b9bB9118";
const rewardTokenContractAddress = "0x268256911efC85840810054c42e405776522956F";
const stakingContractAddress = "0x6B0e14a049Ad8b4818A0f99DB70A816Ac7E5c900";

export const NFT_CONTRACT = getContract({
  client: client,
  chain: chain,
  address: nftContractAddress,
});

export const REWARD_TOKEN_CONTRACT = getContract({
  client: client,
  chain: chain,
  address: rewardTokenContractAddress,
});

export const STAKING_CONTRACT = getContract({
  client: client,
  chain: chain,
  address: stakingContractAddress,
  abi: stakingABI,
});
