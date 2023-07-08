import { TxOut } from "@cardano-ogmios/schema";

import { inputsGetTotalAsset } from "./inputsGetTotalAsset";
import { outputsGetTotalAsset } from "./outputsGetTotalAsset";
import { BlockfrostUtxo } from "./types";

export const calculateTotalAssetMintedOrBurnt = (
  inputs: BlockfrostUtxo[],
  outputs: TxOut[],
  asset: string
): bigint => {
  const totalAssetInput = inputsGetTotalAsset(inputs, asset);
  const totalAssetOutput = outputsGetTotalAsset(outputs, asset);

  return totalAssetOutput - totalAssetInput;
};
