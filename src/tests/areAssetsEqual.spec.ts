import { getFakeCip68AssetName } from "./__utils__/getFakeCip68AssetName";
import { getFakePolicyId } from "./__utils__/getFakePolicyId";

import { areAssetsEqual } from "../areAssetsEqual";

describe("areAssetsEqual", () => {
  it("returns true if the assets are exactly equal", () => {
    const mockAssetUnit = getFakePolicyId() + getFakeCip68AssetName();

    expect(areAssetsEqual(mockAssetUnit, mockAssetUnit)).toBe(true);
  });

  it("returns true if asset1 is using Ogmios format and asset2 using Blockfrost unit format", () => {
    const mockAssetUnit1 = getFakePolicyId() + getFakeCip68AssetName();
    const mockAssetUnit2 = getFakePolicyId() + "." + getFakeCip68AssetName();

    expect(areAssetsEqual(mockAssetUnit1, mockAssetUnit2)).toBe(true);
  });

  it("returns true if asset2 is using Ogmios format and asset1 is using Blockfrost unit format", () => {
    const mockAssetUnit1 = getFakePolicyId() + getFakeCip68AssetName();
    const mockAssetUnit2 = getFakePolicyId() + "." + getFakeCip68AssetName();

    expect(areAssetsEqual(mockAssetUnit2, mockAssetUnit1)).toBe(true);
  });

  it("returns true if both are using Ogmios format", () => {
    const mockAssetUnit = getFakePolicyId() + "." + getFakeCip68AssetName();

    expect(areAssetsEqual(mockAssetUnit, mockAssetUnit)).toBe(true);
  });
});
