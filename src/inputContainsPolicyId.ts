import { BlockfrostUtxo } from "./types";

export const inputContainsPolicyId = (input: BlockfrostUtxo, policyId: string) => {
  return input.amount.some((i) => i.unit.startsWith(policyId));
};
