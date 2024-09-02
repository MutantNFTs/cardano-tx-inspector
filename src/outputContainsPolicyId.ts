import { TransactionOutput } from "@cardano-ogmios/schema";

export const outputContainsPolicyId = (output: TransactionOutput, policyId: string) => {
  return (
    !!output.value &&
    Object.keys(output.value).some((key) => key === policyId)
  );
};
