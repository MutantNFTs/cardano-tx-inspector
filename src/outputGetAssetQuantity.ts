import { TxOut } from "@cardano-ogmios/schema";

import { getAssetDetails } from "@mutants/cardano-utils";

export const outputGetAssetQuantity = (output: TxOut, asset: string) => {
  if (!output.value.assets) {
    return 0n;
  }

  const details = getAssetDetails(asset);

  return (
    output.value.assets[`${details.assetPolicy}.${details.assetName}`] || 0n
  );
};
