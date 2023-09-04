import { inputContainsPolicyId } from "./inputContainsPolicyId";
import { BlockfrostUtxo } from "./types";

export const inputsFilterByPolicyId = (
  inputs: BlockfrostUtxo[],
  policyId: string
) => {
  return inputs.filter((input) => inputContainsPolicyId(input, policyId));
};
