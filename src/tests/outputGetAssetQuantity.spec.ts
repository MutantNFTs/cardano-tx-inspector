import { TransactionOutput } from "@cardano-ogmios/schema";

import { getFakeCip68AssetName } from "./__utils__/getFakeCip68AssetName";
import { getFakePolicyId } from "./__utils__/getFakePolicyId";
import { getMockAddr } from "./__utils__/getMockAddr";
import { getMockTxOut } from "./__utils__/getMockTxOut";

import { outputGetAssetQuantity } from "../outputGetAssetQuantity";

describe("outputGetAssetQuantity", () => {
  it("returns the quantity of the specified asset if it exists in the output", () => {
    const asset = getFakePolicyId() + "." + getFakeCip68AssetName();
    const quantity = 10n;
    const output: TransactionOutput = getMockTxOut({
      address: getMockAddr(),
      lovelace: 1000n,
      additionalAssets: {
        [getFakePolicyId()]: {
          [getFakeCip68AssetName()]: quantity,
        },
      },
    });

    const result = outputGetAssetQuantity(output, asset);

    expect(result).toBe(quantity);
  });

  it("returns null if the specified asset does not exist in the output", () => {
    const asset = getFakePolicyId() + "." + "mockAsset";
    const output: TransactionOutput = getMockTxOut({
      address: getMockAddr(),
      lovelace: 1000n,
      additionalAssets: {
        [getFakePolicyId()]: {
          anotherAsset: 5n,
        },
      },
    });

    const result = outputGetAssetQuantity(output, asset);

    expect(result).toBe(0n);
  });

  it("returns null if the output does not have any assets", () => {
    const asset = "mockAsset";
    const output: TransactionOutput = getMockTxOut({
      address: getMockAddr(),
      lovelace: 1000n,
    });

    const result = outputGetAssetQuantity(output, asset);

    expect(result).toBe(0n);
  });
});
