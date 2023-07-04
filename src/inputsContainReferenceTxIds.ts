import { TxIn } from "@cardano-ogmios/schema";

export const inputsContainReferenceTxIds = (inputs: TxIn[], txIds: string[]) => {
  return inputs.some((i) => txIds.some((txId) => txId === i.txId));
};
