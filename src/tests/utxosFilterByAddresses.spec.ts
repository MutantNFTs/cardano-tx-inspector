import { getMockAddr } from "./__utils__/getMockAddr";
import { getMockBlockfrostUtxo } from "./__utils__/getMockBlockfrostUtxo";

import { BlockfrostUtxo } from "../types";
import { utxosFilterByAddresses } from "../utxosFilterByAddresses";

describe("utxosFilterByAddresses", () => {
  it("returns utxos that belong to the provided addresses", async () => {
    const addresses = [getMockAddr()];
    const utxos: BlockfrostUtxo[] = [
      getMockBlockfrostUtxo({
        address: getMockAddr(),
        lovelace: "1000",
      }),
      getMockBlockfrostUtxo({
        address: getMockAddr(1),
        lovelace: "1000",
      }),
      getMockBlockfrostUtxo({
        address: getMockAddr(),
        lovelace: "1000",
      }),
    ];

    const result = await utxosFilterByAddresses(utxos, addresses);

    expect(result).toEqual([utxos[0], utxos[2]]);
  });

  it("returns utxos that belong to the provided addresses when there are multiple addresses", async () => {
    const addresses = [getMockAddr(), getMockAddr(1)];
    const utxos: BlockfrostUtxo[] = [
      getMockBlockfrostUtxo({
        address: getMockAddr(),
        lovelace: "1000",
      }),
      getMockBlockfrostUtxo({
        address: getMockAddr(1),
        lovelace: "1000",
      }),
      getMockBlockfrostUtxo({
        address: getMockAddr(),
        lovelace: "1000",
      }),
    ];

    const result = await utxosFilterByAddresses(utxos, addresses);

    expect(result).toEqual(utxos);
  });

  it("returns an empty array if no utxos belong to the provided addresses", async () => {
    const addresses = [getMockAddr(2)];
    const utxos: BlockfrostUtxo[] = [
      getMockBlockfrostUtxo({
        address: getMockAddr(),
        lovelace: "1000",
      }),
      getMockBlockfrostUtxo({
        address: getMockAddr(1),
        lovelace: "1000",
      }),
      getMockBlockfrostUtxo({
        address: getMockAddr(),
        lovelace: "1000",
      }),
    ];

    const result = await utxosFilterByAddresses(utxos, addresses);

    expect(result).toEqual([]);
  });
});
