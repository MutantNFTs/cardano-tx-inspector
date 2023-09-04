import { TxOut } from "@cardano-ogmios/schema";

import { getMockAddr } from "./__utils__/getMockAddr";
import { getMockTxOut } from "./__utils__/getMockTxOut";

import { outputsFilterNonMatchingAddr } from "../outputsFilterNonMatchingAddr";

describe("outputsFilterNonMatchingAddr", () => {
  it("returns a list with outputs that does not match any of the ignore addresses", () => {
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
    const output3: TxOut = getMockTxOut({
      address: matchingAddr,
      lovelace: 1000n,
    });

    const result = outputsFilterNonMatchingAddr(
      [output3, output2, output],
      ignoreAddresses
    );

    expect(result).toEqual([output3, output]);
  });

  it("returns an empty list if all outputs match the ignore addresses", () => {
    const ignoreAddresses = [getMockAddr(), getMockAddr(1)];
    const output: TxOut = getMockTxOut({
      address: ignoreAddresses[0],
      lovelace: 1000n,
    });

    const result = outputsFilterNonMatchingAddr([output], ignoreAddresses);

    expect(result).toEqual([]);
  });

  it("returns undefined if there are no outputs", () => {
    const ignoreAddresses = [getMockAddr(), getMockAddr(1)];

    const result = outputsFilterNonMatchingAddr([], ignoreAddresses);

    expect(result).toEqual([]);
  });
});
