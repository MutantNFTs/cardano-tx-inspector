import { TxOut } from "@cardano-ogmios/schema";

import { getMockAddr } from "./__utils__/getMockAddr";
import { getMockTxOut } from "./__utils__/getMockTxOut";

import { outputContainsAsset } from "../outputContainsAsset";

describe("outputContainsAsset", () => {
  it("returns true if the output contains the specified asset", () => {
    const asset = "mockAsset";
    const output: TxOut = getMockTxOut({
      address: getMockAddr(),
      lovelace: 1000n,
      additionalAssets: {
        [asset]: 1n,
      },
    });

    const result = outputContainsAsset(output, asset);

    expect(result).toBe(true);
  });

  it("returns false if the output does not contain the specified asset", () => {
    const asset = "mockAsset";
    const output: TxOut = getMockTxOut({
      address: getMockAddr(),
      lovelace: 1000n,
      additionalAssets: {
        anotherAsset: 1n,
      },
    });

    const result = outputContainsAsset(output, asset);

    expect(result).toBe(false);
  });

  it("returns false if the output does not have any assets", () => {
    const asset = "mockAsset";
    const output: TxOut = getMockTxOut({
      address: getMockAddr(),
      lovelace: 1000n,
    });

    const result = outputContainsAsset(output, asset);

    expect(result).toBe(false);
  });
});
