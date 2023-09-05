import { areAssetsEqual } from "@mutants/cardano-utils";

import { BlockfrostUtxo } from "./types";

export const inputHasAsset = (input: BlockfrostUtxo, asset: string) => {
  return input.amount.some((i) => areAssetsEqual(i.unit, asset));
};
