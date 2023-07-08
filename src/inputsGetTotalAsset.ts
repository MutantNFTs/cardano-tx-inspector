import { inputGetTotalAsset } from "./inputGetTotalAsset";
import { BlockfrostUtxo } from "./types";

export const inputsGetTotalAsset = (
  inputs: BlockfrostUtxo[],
  asset: string
) => {
  return inputs.reduce((acc, i) => {
    const totalAsset = inputGetTotalAsset(i, asset);

    acc += BigInt(totalAsset);

    return acc;
  }, 0n);
};
