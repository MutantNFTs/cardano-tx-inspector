import { inputContainsPolicyId } from "./inputContainsPolicyId";
import { BlockfrostUtxo } from "./types";

export const inputsPickByPolicyId = (
  inputs: BlockfrostUtxo[],
  policyId: string
) => {
  for (const input of inputs) {
    if (inputContainsPolicyId(input, policyId)) {
      return input;
    }
  }

  return null;
};
