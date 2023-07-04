import { TxIn } from "@cardano-ogmios/schema";

export const inputsFilterByReferenceTxId = (inputs: TxIn[], txIds: string[]) => {
  return inputs.filter((i) => txIds.some((txId) => txId === i.txId));
};
