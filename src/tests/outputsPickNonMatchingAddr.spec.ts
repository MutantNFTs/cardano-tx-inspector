import { TxOut } from "@cardano-ogmios/schema";

import { getMockAddr } from "./__utils__/getMockAddr";
import { getMockTxOut } from "./__utils__/getMockTxOut";

import { outputsPickNonMatchingAddr } from "../outputsPickNonMatchingAddr";

describe("outputsPickNonMatchingAddr", () => {
  it("returns the first output that does not match any of the ignore addresses", () => {
    const ignoreAddresses = [getMockAddr(), getMockAddr(1)];
    const matchingAddr = getMockAddr(2);
    const output: TxOut = getMockTxOut({
      address: matchingAddr,
      lovelace: 1000n,
    });
    const output2: TxOut = getMockTxOut({
      address: getMockAddr(),
      lovelace: 1000n,
    });

    const result = outputsPickNonMatchingAddr(
      [output2, output],
      ignoreAddresses
    );

    expect(result).toEqual(output);
  });

  it("returns undefined if all outputs match the ignore addresses", () => {
    const ignoreAddresses = [getMockAddr(), getMockAddr(1)];
    const output: TxOut = getMockTxOut({
      address: ignoreAddresses[0],
      lovelace: 1000n,
    });

    const result = outputsPickNonMatchingAddr([output], ignoreAddresses);

    expect(result).toBe(undefined);
  });

  it("returns undefined if there are no outputs", () => {
    const ignoreAddresses = [getMockAddr(), getMockAddr(1)];

    const result = outputsPickNonMatchingAddr([], ignoreAddresses);

    expect(result).toBe(undefined);
  });
});
