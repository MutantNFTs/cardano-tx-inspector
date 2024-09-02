import { TransactionOutputReference } from "@cardano-ogmios/schema";

export const inputsFilterByReferenceTxId = (
  inputs: TransactionOutputReference[],
  txIds: string[]
): TransactionOutputReference[] => {
  return inputs.filter((i) => txIds.some((txId) => txId === i.transaction.id));
};
