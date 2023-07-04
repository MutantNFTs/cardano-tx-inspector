import { isCip25Asset } from "../cip25";
import { CIP_68_ASSET_PREFIX, CIP_68_METADATA_PREFIX } from "../cip68";

describe("isCip25Asset", () => {
  it("should return true for assetName not starting with CIP_68_ASSET_PREFIX or CIP_68_METADATA_PREFIX", () => {
    const assetName = "exampleAsset";
    const result = isCip25Asset(assetName);
    expect(result).toBe(true);
  });

  it("should return false for assetName starting with CIP_68_ASSET_PREFIX", () => {
    const assetName = `${CIP_68_ASSET_PREFIX}exampleAsset`;
    const result = isCip25Asset(assetName);
    expect(result).toBe(false);
  });

  it("should return false for assetName starting with CIP_68_METADATA_PREFIX", () => {
    const assetName = `${CIP_68_METADATA_PREFIX}exampleAsset`;
    const result = isCip25Asset(assetName);
    expect(result).toBe(false);
  });
});
