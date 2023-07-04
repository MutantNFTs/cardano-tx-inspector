import { inputGetLovelace } from "./inputGetLovelace";
import { BlockfrostUtxo } from "./types";

/**
 * This function ignores lovelace values that are mixed with assets and return the sum of all 'pure' lovelace inputs.
 * @param inputs
 * @returns
 */
export const inputsGetPureLovelaceValue = (inputs: BlockfrostUtxo[]) => {
  return inputs.reduce((acc, i) => {
    if (i.amount.length === 1) {
      acc += inputGetLovelace(i);
    }

    return acc;
  }, 0n);
};
