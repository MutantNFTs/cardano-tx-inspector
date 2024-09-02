import { TransactionOutput } from "@cardano-ogmios/schema";

import { outputGetAssetQuantity } from "./outputGetAssetQuantity";

export const outputsGetTotalAsset = (
  outputs: TransactionOutput[],
  asset: string
): bigint => {
  let totalLovelaceOutput = 0n;

  for (const output of outputs) {
    const total = outputGetAssetQuantity(output, asset);

    totalLovelaceOutput += total;
  }

  return totalLovelaceOutput;
};
