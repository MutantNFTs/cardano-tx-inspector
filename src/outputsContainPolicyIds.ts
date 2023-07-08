import { TxOut } from "@cardano-ogmios/schema";

import { outputContainsPolicyId } from "./outputContainsPolicyId";

export const outputsContainPolicyIds = (
  outputs: TxOut[],
  policyIds: string[]
) => {
  return outputs.some((o) =>
    policyIds.some((policyId) => outputContainsPolicyId(o, policyId))
  );
};
