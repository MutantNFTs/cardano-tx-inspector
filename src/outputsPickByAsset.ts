import { TxOut } from "@cardano-ogmios/schema";
import { outputContainsAsset } from "./outputContainsAsset";

export const outputsPickByAsset = (outputs: TxOut[], asset: string) => {
  return outputs.find((o) => outputContainsAsset(o, asset));
};
