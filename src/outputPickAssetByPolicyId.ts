import { TxOut } from "@cardano-ogmios/schema";

export const outputPickAssetByPolicyId = (output: TxOut, policyId: string) => {
  return Object.keys(output.value?.assets || {}).find((a) =>
    a.startsWith(policyId)
  );
};
