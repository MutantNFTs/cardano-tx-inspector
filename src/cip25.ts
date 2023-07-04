import { CIP_68_ASSET_PREFIX, CIP_68_METADATA_PREFIX } from "./cip68";

export const isCip25Asset = (assetName: string) => {
  if (
    !assetName.startsWith(CIP_68_ASSET_PREFIX) &&
    !assetName.startsWith(CIP_68_METADATA_PREFIX)
  ) {
    return true;
  }

  return false;
};
