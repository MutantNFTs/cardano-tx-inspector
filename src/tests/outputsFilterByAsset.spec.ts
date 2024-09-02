import { TransactionOutput } from "@cardano-ogmios/schema";

import { getFakePolicyId } from "./__utils__/getFakePolicyId";
import { getMockAddr } from "./__utils__/getMockAddr";
import { getMockTxOut } from "./__utils__/getMockTxOut";

import { outputContainsAsset } from "../outputContainsAsset";
import { outputsFilterByAsset } from "../outputsFilterByAsset";

jest.mock("../outputContainsAsset");

describe("outputsFilterByAsset", () => {
  beforeEach(() => {
    (outputContainsAsset as jest.Mock).mockClear();
  });

  it("returns the outputs containing the specified asset", () => {
    const asset = `${getFakePolicyId()}.${"mockAsset"}`;
    const output: TransactionOutput = getMockTxOut({
      address: getMockAddr(),
      lovelace: 1000n,
      additionalAssets: {
        [getFakePolicyId()]: {
          mockAsset: 10n,
        },
      },
    });
    const output2: TransactionOutput = getMockTxOut({
      address: getMockAddr(1),
      lovelace: 1000n,
      additionalAssets: {
        [getFakePolicyId()]: {
          mockAsset: 10n,
        },
      },
    });

    (outputContainsAsset as jest.Mock).mockReturnValue(true);

    const result = outputsFilterByAsset([output, output2], asset);

    expect(result).toEqual([output, output2]);
  });

  it("returns an empty array if no output contains the specified asset", () => {
    const asset = "mockAsset";
    const output: TransactionOutput = getMockTxOut({
      address: getMockAddr(),
      lovelace: 1000n,
      additionalAssets: {
        policyId1: {
          anotherAsset: 5n,
        },
      },
    });

    (outputContainsAsset as jest.Mock).mockReturnValue(false);

    const result = outputsFilterByAsset([output], asset);

    expect(result).toEqual([]);
  });

  it("returns an empty array if there are no outputs", () => {
    const asset = "mockAsset";

    const result = outputsFilterByAsset([], asset);

    expect(result).toEqual([]);
  });
});
