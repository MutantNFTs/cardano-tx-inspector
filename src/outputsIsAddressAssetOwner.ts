import { TxOut } from "@cardano-ogmios/schema";

import { isSameStakeAddress } from "@mutants/cardano-utils";

import { outputsPickByAsset } from "./outputsPickByAsset";

/**
 * Checks if the given address is the owner of the given asset according to the outputs of the transaction
 * @param outputs
 * @param addr
 * @param asset
 * @returns
 */
export const outputsIsAddressAssetOwner = (
  outputs: TxOut[],
  addr: string,
  asset: string
): boolean => {
  const output = outputsPickByAsset(outputs, asset);

  return !!output && isSameStakeAddress(addr, output.address);
};
