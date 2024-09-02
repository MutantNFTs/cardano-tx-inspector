import { TransactionOutput } from "@cardano-ogmios/schema";

import { outputContainsPolicyId } from "./outputContainsPolicyId";

export const outputsContainPolicyIds = (
  outputs: TransactionOutput[],
  policyIds: string[]
) => {
  return outputs.some((o) =>
    policyIds.some((policyId) => outputContainsPolicyId(o, policyId))
  );
};
