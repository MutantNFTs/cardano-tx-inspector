import { inputGetLovelace } from "./inputGetLovelace";
import { toStakeAddress } from "./toStakeAddress";
import { BlockfrostUtxo } from "./types";

export const inputsGetLovelaceByAddress = (
  inputs: BlockfrostUtxo[],
  addr: string
) => {
  let totalInput = 0n;
  const stakeAddr = toStakeAddress(addr);

  for (const input of inputs) {
    if (toStakeAddress(input.address) === stakeAddr) {
      totalInput += inputGetLovelace(input);
    }
  }

  return totalInput;
};
