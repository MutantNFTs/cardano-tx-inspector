import { TxOut } from "@cardano-ogmios/schema";
import { outputContainsPolicyId } from "./outputContainsPolicyId";

export const outputsContainPolicyId = (outputs: TxOut[], policyId: string) => {
  return outputs.some((o) => outputContainsPolicyId(o, policyId));
};
