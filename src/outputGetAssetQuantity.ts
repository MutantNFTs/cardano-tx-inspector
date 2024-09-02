import { TransactionOutput } from "@cardano-ogmios/schema";

import { getAssetDetails } from "@mutants/cardano-utils";

export const outputGetAssetQuantity = (
  output: TransactionOutput,
  asset: string
) => {
  if (!output.value) {
    return 0n;
  }

  const details = getAssetDetails(asset);

  return (
    output.value?.[details.assetPolicy]?.[details.assetName] || 0n
  );
};
