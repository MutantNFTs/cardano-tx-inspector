import { Transaction } from "@cardano-ogmios/schema";

export const txHasPolicyIdMint = (tx: Transaction, policyId: string) => {
  if (tx.mint && Object.keys(tx.mint).length > 0) {
    return Object.keys(tx.mint).some((asset) =>
      asset.startsWith(policyId)
    );
  }

  return false;
};
