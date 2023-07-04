import { BlockfrostUtxo } from "./types";

export const utxosFilterByAddresses = async (
  utxos: BlockfrostUtxo[],
  addresses: string[]
) => {
  return utxos.filter((utxo) =>
    addresses.some((addr) => addr === utxo.address)
  );
};
