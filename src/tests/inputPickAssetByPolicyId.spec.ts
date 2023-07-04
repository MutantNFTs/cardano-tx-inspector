import { getFakePolicyId } from "./__utils__/getFakePolicyId";
import { getMockAddr } from "./__utils__/getMockAddr";
import { getMockBlockfrostUtxo } from "./__utils__/getMockBlockfrostUtxo";

import { inputPickAssetByPolicyId } from "../inputPickAssetByPolicyId";
import { BlockfrostUtxo } from "../types";

describe("inputPickAssetByPolicyId", () => {
  it("should return the asset with a unit starting with the policyId", () => {
    const policyId = getFakePolicyId();

    const input: BlockfrostUtxo = getMockBlockfrostUtxo({
      address: getMockAddr(),
      lovelace: "10",
      additionalAssets: [
        { unit: `${policyId}123`, quantity: "1" },
        { unit: "otherUnit", quantity: "2" },
      ],
    });

    const result = inputPickAssetByPolicyId(input, policyId);
    expect(result).toEqual({ unit: `${policyId}123`, quantity: "1" });
  });

  it("should return undefined if no asset has a unit starting with the policyId", () => {
    const policyId = getFakePolicyId();

    const input: BlockfrostUtxo = getMockBlockfrostUtxo({
      address: getMockAddr(),
      lovelace: "10",
      additionalAssets: [
        { unit: "otherUnit1", quantity: "1" },
        { unit: "otherUnit2", quantity: "2" },
      ],
    });

    const result = inputPickAssetByPolicyId(input, policyId);
    expect(result).toBeUndefined();
  });
});
