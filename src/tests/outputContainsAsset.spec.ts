import { TransactionOutput } from "@cardano-ogmios/schema";

import { getFakeCip68AssetName } from "./__utils__/getFakeCip68AssetName";
import { getFakePolicyId } from "./__utils__/getFakePolicyId";
import { getMockAddr } from "./__utils__/getMockAddr";
import { getMockTxOut } from "./__utils__/getMockTxOut";

import { outputContainsAsset } from "../outputContainsAsset";

describe("outputContainsAsset", () => {
  it("returns true if the output contains the specified asset", () => {
    const asset = getFakePolicyId() + "." + getFakeCip68AssetName();
    const output: TransactionOutput = getMockTxOut({
      address: getMockAddr(),
      lovelace: 1000n,
      additionalAssets: {
        [getFakePolicyId()]: {
          [getFakeCip68AssetName()]: 1n,
        },
      },
    });

    const result = outputContainsAsset(output, asset);

    expect(result).toBe(true);
  });

  it("returns false if the output does not contain the specified asset", () => {
    const asset = getFakePolicyId() + "." + getFakeCip68AssetName();
    const output: TransactionOutput = getMockTxOut({
      address: getMockAddr(),
      lovelace: 1000n,
      additionalAssets: {
        [getFakePolicyId()]: {
          anotherAsset: 1n,
        },
      },
    });

    const result = outputContainsAsset(output, asset);

    expect(result).toBe(false);
  });

  it("returns false if the output does not have any assets", () => {
    const asset = getFakePolicyId() + "." + getFakeCip68AssetName();
    const output: TransactionOutput = getMockTxOut({
      address: getMockAddr(),
      lovelace: 1000n,
    });

    const result = outputContainsAsset(output, asset);

    expect(result).toBe(false);
  });
});
