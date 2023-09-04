import { bech32 } from "bech32";

import { bytesToHex } from "./bytesToHex";

export const toHexAddress = (paymentAddress: string) => {
  try {
    const decoded = bech32.decode(paymentAddress, 120);
    const fromWords = bech32.fromWords(decoded.words);

    return bytesToHex(fromWords);
  } catch (e) {
    return null;
  }
};
