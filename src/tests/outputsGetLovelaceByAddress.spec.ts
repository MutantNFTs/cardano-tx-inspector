import { TransactionOutput } from "@cardano-ogmios/schema";

import { getMockAddr } from "./__utils__/getMockAddr";
import { getMockTxOut } from "./__utils__/getMockTxOut";

import { outputsGetLovelaceByAddress } from "../outputsGetLovelaceByAddress";

describe("outputsGetLovelaceByAddress", () => {
  it("returns total lovelace for the specified address", () => {
    const addr = getMockAddr();

    const outputs: TransactionOutput[] = [
      getMockTxOut({
        address: addr,
        lovelace: 1000n,
      }),
      getMockTxOut({
        address: addr,
        lovelace: 2000n,
      }),
    ];

    const result = outputsGetLovelaceByAddress(outputs, addr);

    expect(result).toBe(3000n);
  });

  it("returns zero if the specified address does not exist in any of the outputs", () => {
    const addr = getMockAddr();
    const anotherAddr = getMockAddr(1);

    const outputs: TransactionOutput[] = [
      getMockTxOut({
        address: anotherAddr,
        lovelace: 1000n,
      }),
      getMockTxOut({
        address: anotherAddr,
        lovelace: 2000n,
      }),
    ];

    const result = outputsGetLovelaceByAddress(outputs, addr);

    expect(result).toBe(0n);
  });

  it("returns zero if there are no outputs", () => {
    const addr = getMockAddr();
    const outputs: TransactionOutput[] = [];

    const result = outputsGetLovelaceByAddress(outputs, addr);

    expect(result).toBe(0n);
  });
});
