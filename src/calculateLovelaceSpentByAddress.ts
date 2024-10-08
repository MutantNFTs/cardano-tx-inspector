import { TransactionOutput } from "@cardano-ogmios/schema";

import { inputsGetLovelaceByAddress } from "./inputsGetLovelaceByAddress";
import { outputsGetLovelaceByAddress } from "./outputsGetLovelaceByAddress";
import { BlockfrostUtxo } from "./types";

export const calculateLovelaceSpentByAddress = (
  inputs: BlockfrostUtxo[],
  outputs: TransactionOutput[],
  addr: string
): bigint => {
  const totalAdaInput = inputsGetLovelaceByAddress(inputs, addr);
  const totalAdaOutput = outputsGetLovelaceByAddress(outputs, addr);

  return totalAdaInput - totalAdaOutput;
};
