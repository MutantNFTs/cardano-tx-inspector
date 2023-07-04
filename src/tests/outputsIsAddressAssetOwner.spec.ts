import { TxOut } from "@cardano-ogmios/schema";

import { getMockAddr } from "./__utils__/getMockAddr";
import { getMockTxOut } from "./__utils__/getMockTxOut";

import { isSameStakeAddr } from "../isSameStakeAddr";
import { outputsIsAddressAssetOwner } from "../outputsIsAddressAssetOwner";
import { outputsPickByAsset } from "../outputsPickByAsset";

jest.mock("../outputsPickByAsset");
jest.mock("../isSameStakeAddr");

describe("outputsIsAddressAssetOwner", () => {
  beforeEach(() => {
    (outputsPickByAsset as jest.Mock).mockClear();
    (isSameStakeAddr as jest.Mock).mockClear();
  });

  it("returns true if the address owns the specified asset", () => {
    const addr = getMockAddr();
    const asset = "mockAsset";
    const output: TxOut = getMockTxOut({
      address: addr,
      lovelace: 1000n,
      additionalAssets: {
        [asset]: 10n,
      },
    });

    (outputsPickByAsset as jest.Mock).mockReturnValue(output);
    (isSameStakeAddr as jest.Mock).mockReturnValue(true);

    const result = outputsIsAddressAssetOwner([output], addr, asset);

    expect(result).toBe(true);
  });

  it("returns false if the address does not own the specified asset", () => {
    const addr = getMockAddr();
    const asset = "mockAsset";
    const output: TxOut = getMockTxOut({
      address: getMockAddr(1),
      lovelace: 1000n,
      additionalAssets: {
        [asset]: 10n,
      },
    });

    (outputsPickByAsset as jest.Mock).mockReturnValue(output);
    (isSameStakeAddr as jest.Mock).mockReturnValue(false);

    const result = outputsIsAddressAssetOwner([output], addr, asset);

    expect(result).toBe(false);
  });

  it("returns false if the specified asset does not exist in the outputs", () => {
    const addr = getMockAddr();
    const asset = "mockAsset";

    (outputsPickByAsset as jest.Mock).mockReturnValue(undefined);
    (isSameStakeAddr as jest.Mock).mockReturnValue(false);

    const result = outputsIsAddressAssetOwner([], addr, asset);

    expect(result).toBe(false);
  });
});
