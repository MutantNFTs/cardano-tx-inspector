import { inputPickAssetByPolicyId } from "./inputPickAssetByPolicyId";
import { BlockfrostUtxo } from "./types";

export const inputsPickAssetByPolicyId = (
  inputs: BlockfrostUtxo[],
  policyId: string
) => {
  for (const i of inputs) {
    const asset = inputPickAssetByPolicyId(i, policyId);

    if (asset) {
      return {
        asset,
        input: i,
      };
    }
  }

  return null;
};
