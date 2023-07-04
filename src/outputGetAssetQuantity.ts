import { TxOut } from "@cardano-ogmios/schema";

export const outputGetAssetQuantity = (output: TxOut, asset: string) => {
  if (!output.value.assets) {
    return 0n;
  }

  return output.value.assets[asset] || 0n;
};
