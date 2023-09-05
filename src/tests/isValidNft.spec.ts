import { isCip25Asset, isCip68Asset } from "@mutants/cardano-utils";

import { isValidNft } from "../isValidNft";
import { BlockfrostAsset } from "../types";

jest.mock("@mutants/cardano-utils");

describe("isValidNft", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns true for a valid NFT asset", () => {
    const asset = {
      asset_name: "validAssetName",
      quantity: "1",
      onchain_metadata: {
        image: "validImageUrl",
      },
    };

    (isCip25Asset as jest.Mock).mockReturnValueOnce(true);

    const result = isValidNft(asset as unknown as BlockfrostAsset);

    expect(result).toBe(true);
    expect(isCip25Asset).toHaveBeenCalledWith(asset.asset_name);
    expect(isCip68Asset).not.toHaveBeenCalled();
  });

  it("returns false if quantity is not 1", () => {
    const asset = {
      asset_name: "validAssetName",
      quantity: "2",
      onchain_metadata: {
        image: "validImageUrl",
      },
    };

    (isCip25Asset as jest.Mock).mockReturnValueOnce(true);

    const result = isValidNft(asset as unknown as BlockfrostAsset);

    expect(result).toBe(false);
  });

  it("returns false if onchain_metadata.image is not defined", () => {
    const asset = {
      asset_name: "validAssetName",
      quantity: "1",
      onchain_metadata: {},
    };

    (isCip25Asset as jest.Mock).mockReturnValueOnce(true);

    const result = isValidNft(asset as unknown as BlockfrostAsset);

    expect(result).toBe(false);
  });

  it("returns false if asset_name is not defined", () => {
    const asset = {
      quantity: "1",
      onchain_metadata: {
        image: "validImageUrl",
      },
    };

    const result = isValidNft(asset as unknown as BlockfrostAsset);

    expect(result).toBe(false);
  });

  it("returns false if neither CIP25 nor CIP68 is valid", () => {
    const asset = {
      asset_name: "validAssetName",
      quantity: "1",
      onchain_metadata: {
        image: "validImageUrl",
      },
    };

    (isCip25Asset as jest.Mock).mockReturnValueOnce(false);
    (isCip68Asset as jest.Mock).mockReturnValueOnce(false);

    const result = isValidNft(asset as unknown as BlockfrostAsset);

    expect(result).toBe(false);
    expect(isCip25Asset).toHaveBeenCalledWith(asset.asset_name);
    expect(isCip68Asset).toHaveBeenCalledWith(asset.asset_name);
  });
});
