import { TxOut } from "@cardano-ogmios/schema";

export const outputGetAssetQuantity = (output: TxOut, asset: string) => {
  if (!output.value.assets) {
    return null;
  }

  return output.value.assets[asset];
};
