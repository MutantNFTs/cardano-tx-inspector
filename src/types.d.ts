import { BlockFrostAPI } from "@blockfrost/blockfrost-js";

export type BlockfrostUtxo = Awaited<
  ReturnType<BlockFrostAPI["txsUtxos"]>
>["outputs"][0];

export type BlockfrostTxsMetadata = Awaited<
  ReturnType<BlockFrostAPI["txsMetadata"]>
>;

export type BlockfrostUtxoValue = BlockfrostUtxo["amount"][0];

export type BlockfrostAsset = Awaited<ReturnType<BlockFrostAPI["assetsById"]>>;
