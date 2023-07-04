import { TxOut } from "@cardano-ogmios/schema";

export const outputContainsAsset = (output: TxOut, asset: string) => {
  return !!output.value.assets && !!output.value.assets[asset];
};
