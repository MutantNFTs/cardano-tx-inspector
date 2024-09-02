import { Transaction } from "@cardano-ogmios/schema";

export const txFilterMintedAssetsByPolicyId = (
  tx: Transaction,
  policyId: string
): string[] => {
  if (tx.mint && Object.keys(tx.mint).length > 0) {
    return Object.keys(tx.mint?.[policyId] || {}).map(
      (asset) => `${policyId}.${asset}`
    );
  }

  return [];
};
