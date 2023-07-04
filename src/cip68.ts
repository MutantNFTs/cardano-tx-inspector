export const CIP_68_ASSET_PREFIX = "000de140";
export const CIP_68_METADATA_PREFIX = "000643b0";

export const isCip68Asset = (assetName: string) => {
  if (assetName.startsWith(CIP_68_ASSET_PREFIX)) {
    return true;
  }

  return false;
};

export const isCip68Metadata = (assetName: string) => {
  if (assetName.startsWith(CIP_68_METADATA_PREFIX)) {
    return true;
  }

  return false;
};
