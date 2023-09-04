import { TxOut } from "@cardano-ogmios/schema";

import { toStakeAddress } from "./toStakeAddress";

/**
 * Returns a list of outputs that do not match any of the addresses in the ignoreAddresses array.
 * @param outputs
 * @param ignoreAddresses
 */
export const outputsFilterNonMatchingAddr = (
  outputs: TxOut[],
  ignoreAddresses: string[]
) => {
  return outputs.filter((output) => {
    const outputStakeAddr = toStakeAddress(output.address);

    return !ignoreAddresses.some((addr) => {
      const stakeAddr = toStakeAddress(addr);

      return stakeAddr === outputStakeAddr;
    });
  });
};
