import { isCip25Asset } from "./cip25";
import { isCip68Asset } from "./cip68";
import { BlockfrostAsset } from "./types";

export const isValidNft = (asset: BlockfrostAsset): boolean => {
  const isUnique =
    asset.quantity === "1" && typeof asset.onchain_metadata?.image === "string";

  const hasImageDefined = typeof asset.onchain_metadata?.image === "string";

  const isValidCipAsset = Boolean(
    asset.asset_name &&
      (isCip25Asset(asset.asset_name) || isCip68Asset(asset.asset_name))
  );

  return isUnique && hasImageDefined && isValidCipAsset;
};
