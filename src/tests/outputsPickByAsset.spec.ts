import { TxOut } from "@cardano-ogmios/schema";

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
    const asset = "mockAsset";
    const output: TxOut = getMockTxOut({
      address: getMockAddr(),
      lovelace: 1000n,
      additionalAssets: {
        [asset]: 10n,
      },
    });

    (outputContainsAsset as jest.Mock).mockReturnValue(true);

    const result = outputsPickByAsset([output], asset);

    expect(result).toEqual(output);
  });

  it("returns undefined if no output contains the specified asset", () => {
    const asset = "mockAsset";
    const output: TxOut = getMockTxOut({
      address: getMockAddr(),
      lovelace: 1000n,
      additionalAssets: {
        anotherAsset: 5n,
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
