import { TxOut } from "@cardano-ogmios/schema";
import { outputContainsPolicyId } from "./outputContainsPolicyId";

export const outputsPickByPolicyId = (outputs: TxOut[], policyId: string) => {
  for (const output of outputs) {
    if (outputContainsPolicyId(output, policyId)) {
      return output;
    }
  }

  return null;
};
