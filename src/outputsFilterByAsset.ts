import { TxOut } from "@cardano-ogmios/schema";

import { outputContainsAsset } from "./outputContainsAsset";

export const outputsFilterByAsset = (outputs: TxOut[], asset: string) => {
  return outputs.filter((o) => outputContainsAsset(o, asset));
};
