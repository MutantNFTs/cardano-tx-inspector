import { TransactionOutput } from "@cardano-ogmios/schema";

import { toStakeAddress } from "@mutants/cardano-utils";

/**
 * Returns a list of outputs that do not match any of the addresses in the ignoreAddresses array.
 * @param outputs
 * @param ignoreAddresses
 */
export const outputsFilterNonMatchingAddr = (
  outputs: TransactionOutput[],
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
