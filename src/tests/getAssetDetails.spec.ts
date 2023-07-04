import { getFakeCip25AssetName } from "./__utils__/getFakeCip25AssetName";
import { getFakeCip68AssetName } from "./__utils__/getFakeCip68AssetName";
import { getFakePolicyId } from "./__utils__/getFakePolicyId";

import { CIP_68_ASSET_PREFIX } from "../cip68";
import { getAssetDetails } from "../getAssetDetails";
import { hexToString } from "../hexToString";

describe("getAssetDetails", () => {
  it("should return asset details correctly for non-CIP68 asset", () => {
    const assetPolicy = getFakePolicyId();
    const assetName = getFakeCip25AssetName();
    const expectedDetails = {
      assetPolicy,
      assetName,
      name: hexToString(assetName),
    };

    const result = getAssetDetails(assetPolicy + assetName);
    expect(result).toEqual(expectedDetails);
  });

  it("should return asset details correctly for CIP68 asset", () => {
    const assetPolicy = getFakePolicyId();
    const assetName = getFakeCip68AssetName();

    const expectedDetails = {
      assetPolicy,
      assetName,
      name: hexToString(assetName.replace(CIP_68_ASSET_PREFIX, "")),
    };

    const result = getAssetDetails(assetPolicy + assetName);
    expect(result).toEqual(expectedDetails);
  });
});
