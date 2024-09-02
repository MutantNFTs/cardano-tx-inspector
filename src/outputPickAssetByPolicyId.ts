import { TransactionOutput } from "@cardano-ogmios/schema";

export const outputPickAssetByPolicyId = (
  output: TransactionOutput,
  policyId: string
) => {
  const asset = Object.keys(output?.value?.[policyId] || {})?.[0];

  if (asset) {
    return `${policyId}.${asset}`;
  }

  return undefined;
};
