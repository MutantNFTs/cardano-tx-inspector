import { isCip25Asset, isCip68Asset } from "@mutants/cardano-utils";

import { BlockfrostAsset } from "./types";

export const isValidNft = (asset: BlockfrostAsset): boolean => {
  const isUnique = asset.quantity === "1";
  const hasImageDefined = typeof asset.onchain_metadata?.image === "string" || Array.isArray(asset.onchain_metadata?.image);

  const isValidCipAsset = Boolean(
    asset.asset_name &&
      (isCip25Asset(asset.asset_name) || isCip68Asset(asset.asset_name))
  );

  return isUnique && hasImageDefined && isValidCipAsset;
};
