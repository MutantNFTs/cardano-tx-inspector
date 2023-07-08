import { TxOut } from "@cardano-ogmios/schema";

import { outputGetAssetQuantity } from "./outputGetAssetQuantity";

export const outputContainsAsset = (output: TxOut, asset: string) => {
  if (!output.value?.assets) {
    return false;
  }

  const totalQuantity = outputGetAssetQuantity(output, asset);

  return totalQuantity > 0n;
};
