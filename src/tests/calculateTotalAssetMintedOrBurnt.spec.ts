import { getFakeCip68AssetName } from "./__utils__/getFakeCip68AssetName";
import { getFakePolicyId } from "./__utils__/getFakePolicyId";
import { getMockAddr } from "./__utils__/getMockAddr";
import { getMockBlockfrostUtxo } from "./__utils__/getMockBlockfrostUtxo";
import { getMockTxOut } from "./__utils__/getMockTxOut";

import { calculateTotalAssetMintedOrBurnt } from "../calculateTotalAssetMintedOrBurnt";

describe("calculateTotalAssetMintedOrBurnt", () => {
  let output: bigint;

  describe("when address has an input with an asset and the asset does not appear in the output", () => {
    beforeEach(() => {
      const mockAsset = getFakePolicyId() + getFakeCip68AssetName();

      const utxo = getMockBlockfrostUtxo({
        address: getMockAddr(),
        lovelace: "10",
        additionalAssets: [
          {
            quantity: "1",
            unit: mockAsset,
          },
        ],
      });

      const outputToAnotherAddr = getMockTxOut({
        address: getMockAddr(1),
        lovelace: 10n,
      });

      output = calculateTotalAssetMintedOrBurnt(
        [utxo],
        [outputToAnotherAddr],
        mockAsset
      );
    });

    it("should return -1 (burn)", () => {
      expect(output).toEqual(-1n);
    });
  });

  describe("when address does not have an input of an asset and the asset appears in the output", () => {
    beforeEach(() => {
      const mockAsset = getFakePolicyId() + "." + getFakeCip68AssetName();

      const utxo = getMockBlockfrostUtxo({
        address: getMockAddr(),
        lovelace: "10",
      });

      const outputToAnotherAddr = getMockTxOut({
        address: getMockAddr(),
        lovelace: 10n,
        additionalAssets: {
          [getFakePolicyId()]: {
            [getFakeCip68AssetName()]: 1n,
          },
        },
      });

      output = calculateTotalAssetMintedOrBurnt(
        [utxo],
        [outputToAnotherAddr],
        mockAsset
      );
    });

    it("should return 1 (mint)", () => {
      expect(output).toEqual(1n);
    });
  });
});
