import { getFakeCip68AssetName } from "./__utils__/getFakeCip68AssetName";
import { getFakePolicyId } from "./__utils__/getFakePolicyId";
import { getMockAddr } from "./__utils__/getMockAddr";
import { getMockTxOut } from "./__utils__/getMockTxOut";

import { outputsGetTotalAsset } from "../outputsGetTotalAsset";

describe("outputsGetTotalAsset", () => {
  let output: bigint;

  describe("when there is an -output with 10n of the specified asset", () => {
    beforeEach(() => {
      const mockAsset = getFakePolicyId() + "." + getFakeCip68AssetName();

      const txOutput = getMockTxOut({
        address: getMockAddr(),
        lovelace: 10n,
        additionalAssets: {
          [mockAsset]: 10n,
        },
      });

      output = outputsGetTotalAsset([txOutput], mockAsset);
    });

    it("should return 10", () => {
      expect(output).toEqual(10n);
    });
  });
});
