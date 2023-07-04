import { BlockfrostUtxo } from "./types";

export const inputHasAsset = (input: BlockfrostUtxo, asset: string) => {
  return input.amount.some((i) => i.unit === asset);
};
