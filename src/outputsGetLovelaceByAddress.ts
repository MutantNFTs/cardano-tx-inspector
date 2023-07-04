import { TxOut } from "@cardano-ogmios/schema";

import { toStakeAddress } from "./toStakeAddress";

export const outputsGetLovelaceByAddress = (
  outputs: TxOut[],
  addr: string
): bigint => {
  let totalLovelaceOutput = 0n;
  const stakeAddr = toStakeAddress(addr);

  for (const output of outputs) {
    if (toStakeAddress(output.address) === stakeAddr) {
      const lovelaceOutput = output?.value?.coins;

      totalLovelaceOutput += lovelaceOutput;
    }
  }

  return totalLovelaceOutput;
};
