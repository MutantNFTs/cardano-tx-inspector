import { BlockfrostUtxo } from "./types";

export const inputPickAssetByPolicyId = (
  input: BlockfrostUtxo,
  policyId: string
) => {
  return input.amount.find((a) => a.unit.startsWith(policyId));
};
