import { TransactionOutput } from "@cardano-ogmios/schema";

import { outputContainsAsset } from "./outputContainsAsset";

export const outputsFilterByAsset = (outputs: TransactionOutput[], asset: string) => {
  return outputs.filter((o) => outputContainsAsset(o, asset));
};
