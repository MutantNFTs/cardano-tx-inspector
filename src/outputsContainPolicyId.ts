import { TransactionOutput } from "@cardano-ogmios/schema";

import { outputContainsPolicyId } from "./outputContainsPolicyId";

export const outputsContainPolicyId = (outputs: TransactionOutput[], policyId: string) => {
  return outputs.some((o) => outputContainsPolicyId(o, policyId));
};
