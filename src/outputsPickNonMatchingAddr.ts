import { TxOut } from "@cardano-ogmios/schema";

import { toStakeAddress } from "./toStakeAddress";

/**
 * Returns the first output that does not match any of the addresses in the ignoreAddresses array.
 * @param outputs
 * @param ignoreAddresses
 */
export const outputsPickNonMatchingAddr = (
  outputs: TxOut[],
  ignoreAddresses: string[]
) => {
  return outputs.find((output) => {
    const outputStakeAddr = toStakeAddress(output.address);

    return !ignoreAddresses.some((addr) => {
      const stakeAddr = toStakeAddress(addr);

      return stakeAddr === outputStakeAddr;
    });
  });
};
