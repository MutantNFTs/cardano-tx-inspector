import { TxOut } from "@cardano-ogmios/schema";

export const outputContainsPolicyId = (output: TxOut, policyId: string) => {
  return (
    !!output.value.assets &&
    Object.keys(output.value.assets).some((key) => key.startsWith(policyId))
  );
};
