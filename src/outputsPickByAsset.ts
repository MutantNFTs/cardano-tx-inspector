import { TransactionOutput } from "@cardano-ogmios/schema";

import { outputContainsAsset } from "./outputContainsAsset";

export const outputsPickByAsset = (outputs: TransactionOutput[], asset: string) => {
  return outputs.find((o) => outputContainsAsset(o, asset));
};
