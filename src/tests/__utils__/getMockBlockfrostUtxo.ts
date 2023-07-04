import { BlockfrostUtxo, BlockfrostUtxoValue } from "../../types";

export const getMockBlockfrostUtxo = (opts: {
  address: string;
  lovelace: string;
  additionalAssets?: BlockfrostUtxoValue[];
}): BlockfrostUtxo =>
  ({
    address: opts.address,
    amount: [
      {
        unit: "lovelace",
        quantity: opts.lovelace,
      },
      ...(opts.additionalAssets || []),
    ],
  } as BlockfrostUtxo);
