import { areAssetsEqual } from "./areAssetsEqual";
import { BlockfrostUtxo } from "./types";

export const inputGetTotalAsset = (input: BlockfrostUtxo, asset: string) => {
  return input.amount.reduce((acc, i) => {
    if (areAssetsEqual(i.unit, asset)) {
      acc += BigInt(i.quantity);
    }

    return acc;
  }, 0n);
};
