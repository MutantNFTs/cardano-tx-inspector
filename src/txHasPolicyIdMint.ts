import { TxBabbage } from "@cardano-ogmios/schema";

export const txHasPolicyIdMint = (tx: TxBabbage, policyId: string) => {
  if (tx.body.mint.assets && Object.keys(tx.body.mint.assets).length > 0) {
    return Object.keys(tx.body.mint.assets).some((asset) =>
      asset.startsWith(policyId)
    );
  }

  return false;
};
