import { TxOut } from "@cardano-ogmios/schema";

export const getMockTxOut = (opts: {
  address: string;
  lovelace: bigint;
  additionalAssets?: Record<string, bigint>;
}): TxOut => ({
  address: opts.address,
  value: {
    coins: opts.lovelace,
    assets: opts.additionalAssets,
  },
});
