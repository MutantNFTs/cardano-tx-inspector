import { TxOut } from "@cardano-ogmios/schema";
import { outputContainsPolicyId } from "./outputContainsPolicyId";

/**
 * Picks the first output with a single asset with the given policyId
 * @param outputs 
 * @param policyId 
 * @returns 
 */
export const outputsPickByUniquePolicyIdAsset = (
  outputs: TxOut[],
  policyId: string
) => {
  for (const output of outputs) {
    if (
      outputContainsPolicyId(output, policyId) &&
      Object.keys(output.value?.assets || {})?.length === 1
    ) {
      return output;
    }
  }

  return null;
};
