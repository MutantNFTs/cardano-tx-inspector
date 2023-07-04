import { TxBabbage } from "@cardano-ogmios/schema";

export const txFilterMintedAssetsByPolicyId = (
  tx: TxBabbage,
  policyId: string
): string[] => {
  if (tx.body.mint.assets && Object.keys(tx.body.mint.assets).length > 0) {
    return Object.keys(tx.body.mint.assets).filter((asset) =>
      asset.startsWith(policyId)
    );
  }

  return [];
};
