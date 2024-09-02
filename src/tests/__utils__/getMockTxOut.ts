import { TransactionOutput } from "@cardano-ogmios/schema";

export const getMockTxOut = (opts: {
  address: string;
  lovelace: bigint;
  additionalAssets?: Record<string, Record<string, bigint>>;
}): TransactionOutput => ({
  address: opts.address,
  value: {
    ada: {
      lovelace: opts.lovelace,
    },
    ...opts.additionalAssets,
  },
});
