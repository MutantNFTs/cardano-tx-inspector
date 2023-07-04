import { inputHasAsset } from "./inputHasAsset";
import { BlockfrostUtxo } from "./types";

export const inputsPickByAsset = (inputs: BlockfrostUtxo[], asset: string) => {
  return inputs.find((i) => inputHasAsset(i, asset)) || null;
};
