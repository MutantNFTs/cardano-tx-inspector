import { TxOut } from "@cardano-ogmios/schema";

import { getMockAddr } from "./__utils__/getMockAddr";
import { getMockTxOut } from "./__utils__/getMockTxOut";

import { outputGetAssetQuantity } from "../outputGetAssetQuantity";

describe("outputGetAssetQuantity", () => {
  it("returns the quantity of the specified asset if it exists in the output", () => {
    const asset = "mockAsset";
    const quantity = 10n;
    const output: TxOut = getMockTxOut({
      address: getMockAddr(),
      lovelace: 1000n,
      additionalAssets: {
        [asset]: quantity,
      },
    });

    const result = outputGetAssetQuantity(output, asset);

    expect(result).toBe(quantity);
  });

  it("returns null if the specified asset does not exist in the output", () => {
    const asset = "mockAsset";
    const output: TxOut = getMockTxOut({
      address: getMockAddr(),
      lovelace: 1000n,
      additionalAssets: {
        anotherAsset: 5n,
      },
    });

    const result = outputGetAssetQuantity(output, asset);

    expect(result).toBe(0n);
  });

  it("returns null if the output does not have any assets", () => {
    const asset = "mockAsset";
    const output: TxOut = getMockTxOut({
      address: getMockAddr(),
      lovelace: 1000n,
    });

    const result = outputGetAssetQuantity(output, asset);

    expect(result).toBe(0n);
  });
});
