import { inputContainsPolicyId } from "./inputContainsPolicyId";
import { BlockfrostUtxo } from "./types";

export const inputsContainPolicyId = (
  inputs: BlockfrostUtxo[],
  policyId: string
) => {
  return inputs.some((i) => inputContainsPolicyId(i, policyId));
};
