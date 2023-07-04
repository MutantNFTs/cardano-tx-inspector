import { bech32 } from "bech32";

import { hexToBytes } from "./hexToBytes";

export const toStakeAddress = (paymentAddress: string, network = "mainnet") => {
  const isMainnet = network === "mainnet";
  const value = bech32.decode(paymentAddress, 120);
  const bechWords = bech32.fromWords(value.words);
  const hexCodes = bechWords.map((w) => w.toString(16).padStart(2, "0"));
  const hexAddress = hexCodes.join("");
  const stakeHexAddress = hexAddress.substring(58);
  const stakeHexBytes = hexToBytes((isMainnet ? "e1" : "e0") + stakeHexAddress);
  const bech32Words = bech32.toWords(stakeHexBytes);

  return bech32.encode(isMainnet ? "stake" : "stake_test", bech32Words, 120);
};
