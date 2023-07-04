import { isCip68Asset, isCip68Metadata } from "../cip68";
import { CIP_68_ASSET_PREFIX, CIP_68_METADATA_PREFIX } from "../cip68";

describe("isCip68Asset", () => {
  it("should return true for assetName starting with CIP_68_ASSET_PREFIX", () => {
    const assetName = `${CIP_68_ASSET_PREFIX}exampleAsset`;
    const result = isCip68Asset(assetName);
    expect(result).toBe(true);
  });

  it("should return false for assetName not starting with CIP_68_ASSET_PREFIX", () => {
    const assetName = "exampleAsset";
    const result = isCip68Asset(assetName);
    expect(result).toBe(false);
  });
});

describe("isCip68Metadata", () => {
  it("should return true for assetName starting with CIP_68_METADATA_PREFIX", () => {
    const assetName = `${CIP_68_METADATA_PREFIX}exampleAsset`;
    const result = isCip68Metadata(assetName);
    expect(result).toBe(true);
  });

  it("should return false for assetName not starting with CIP_68_METADATA_PREFIX", () => {
    const assetName = "exampleAsset";
    const result = isCip68Metadata(assetName);
    expect(result).toBe(false);
  });
});
