import { TransactionOutput } from "@cardano-ogmios/schema";

import { outputPickAssetByPolicyId } from "./outputPickAssetByPolicyId";

export const outputsPickAssetByPolicyId = (
  outputs: TransactionOutput[],
  policyId: string
) => {
  for (const o of outputs) {
    const asset = outputPickAssetByPolicyId(o, policyId);

    if (asset) {
      return {
        asset,
        output: o,
      };
    }
  }

  return null;
};
