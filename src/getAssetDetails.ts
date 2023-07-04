import { CIP_68_ASSET_PREFIX } from "./cip68";
import { hexToString } from "./hexToString";

export const getAssetDetails = (asset: string) => {
  const assetPolicy = asset.substring(0, 56);
  const assetName = asset.substring(56);

  return {
    assetPolicy,
    assetName,
    name: assetName.startsWith(CIP_68_ASSET_PREFIX)
      ? hexToString(assetName.substring(CIP_68_ASSET_PREFIX.length))
      : hexToString(assetName),
  };
};
