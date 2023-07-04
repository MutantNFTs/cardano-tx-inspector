import { inputGetLovelace } from "./inputGetLovelace";
import { BlockfrostUtxo } from "./types";

export const inputsGetLovelace = (inputs: BlockfrostUtxo[]) => {
  let totalInput = 0n;

  for (const input of inputs) {
    totalInput += inputGetLovelace(input);
  }

  return totalInput;
};
