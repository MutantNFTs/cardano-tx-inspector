import { TransactionOutput } from "@cardano-ogmios/schema";

import { toStakeAddress } from "@mutants/cardano-utils";

export const outputsGetLovelaceByAddress = (
  outputs: TransactionOutput[],
  addr: string
): bigint => {
  let totalLovelaceOutput = 0n;
  const stakeAddr = toStakeAddress(addr);

  for (const output of outputs) {
    if (toStakeAddress(output.address) === stakeAddr) {
      const lovelaceOutput = output?.value?.ada.lovelace;

      totalLovelaceOutput += lovelaceOutput;
    }
  }

  return totalLovelaceOutput;
};
