import { TransactionOutputReference } from "@cardano-ogmios/schema";

export const inputsContainReferenceTxIds = (
  inputs: TransactionOutputReference[],
  txIds: string[]
) => {
  return inputs.some((i) => txIds.some((txId) => txId === i.transaction.id));
};
