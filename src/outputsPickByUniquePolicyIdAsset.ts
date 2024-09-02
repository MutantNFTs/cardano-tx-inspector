import { TransactionOutput } from "@cardano-ogmios/schema";

import { outputContainsPolicyId } from "./outputContainsPolicyId";

/**
 * Picks the first output with a single asset with the given policyId
 * @param outputs
 * @param policyId
 * @returns
 */
export const outputsPickByUniquePolicyIdAsset = (
  outputs: TransactionOutput[],
  policyId: string
) => {
  for (const output of outputs) {
    if (
      output.value &&
      outputContainsPolicyId(output, policyId) &&
      Object.keys(output.value?.[policyId] || {}).length === 1
    ) {
      return output;
    }
  }

  return null;
};
