import { TransactionOutput } from "@cardano-ogmios/schema";

import { getFakePolicyId } from "./__utils__/getFakePolicyId";
import { getMockAddr } from "./__utils__/getMockAddr";
import { getMockTxOut } from "./__utils__/getMockTxOut";

import { outputContainsAsset } from "../outputContainsAsset";
import { outputsPickByAsset } from "../outputsPickByAsset";

jest.mock("../outputContainsAsset");

describe("outputsPickByAsset", () => {
  beforeEach(() => {
    (outputContainsAsset as jest.Mock).mockClear();
  });

  it("returns the output containing the specified asset", () => {
    const asset = getFakePolicyId() + "mockAsset";
    const output: TransactionOutput = getMockTxOut({
      address: getMockAddr(),
      lovelace: 1000n,
      additionalAssets: {
        [getFakePolicyId()]: {
          [asset]: 10n,
        },
      },
    });

    (outputContainsAsset as jest.Mock).mockReturnValue(true);

    const result = outputsPickByAsset([output], asset);

    expect(result).toEqual(output);
  });

  it("returns undefined if no output contains the specified asset", () => {
    const asset = "mockAsset";
    const output: TransactionOutput = getMockTxOut({
      address: getMockAddr(),
      lovelace: 1000n,
      additionalAssets: {
        [getFakePolicyId()]: {
          anotherAsset: 5n,
        },
      },
    });

    (outputContainsAsset as jest.Mock).mockReturnValue(false);

    const result = outputsPickByAsset([output], asset);

    expect(result).toBe(undefined);
  });

  it("returns undefined if there are no outputs", () => {
    const asset = "mockAsset";

    const result = outputsPickByAsset([], asset);

    expect(result).toBe(undefined);
  });
});
