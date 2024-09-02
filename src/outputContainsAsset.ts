import { TransactionOutput } from "@cardano-ogmios/schema";

import { outputGetAssetQuantity } from "./outputGetAssetQuantity";

export const outputContainsAsset = (output: TransactionOutput, asset: string) => {
  if (!output.value) {
    return false;
  }

  const totalQuantity = outputGetAssetQuantity(output, asset);

  return totalQuantity > 0n;
};
