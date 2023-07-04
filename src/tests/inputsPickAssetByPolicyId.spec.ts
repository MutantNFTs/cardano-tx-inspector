import { getMockBlockfrostUtxo } from "./__utils__/getMockBlockfrostUtxo";

import { inputsPickAssetByPolicyId } from "../inputsPickAssetByPolicyId";
import { BlockfrostUtxo } from "../types";

describe("inputsPickAssetByPolicyId", () => {
  it("returns the asset and input when an asset matches the policy ID", () => {
    const policyId = "mockPolicyId";
    const inputs = [
      getMockBlockfrostUtxo({
        address: "address1",
        lovelace: "1000",
        additionalAssets: [
          { unit: "asset1", quantity: "10" },
          { unit: "asset2", quantity: "5" },
        ],
      }),
      getMockBlockfrostUtxo({
        address: "address2",
        lovelace: "2000",
        additionalAssets: [{ unit: "mockPolicyIdasset3", quantity: "20" }],
      }),
      getMockBlockfrostUtxo({
        address: "address3",
        lovelace: "3000",
        additionalAssets: [{ unit: "asset4", quantity: "15" }],
      }),
    ];

    const result = inputsPickAssetByPolicyId(inputs, policyId);

    expect(result).toEqual({
      asset: { unit: "mockPolicyIdasset3", quantity: "20" },
      input: inputs[1],
    });
  });

  it("returns null if no asset matches the policy ID", () => {
    const policyId = "mockPolicyId";
    const inputs = [
      getMockBlockfrostUtxo({
        address: "address1",
        lovelace: "1000",
        additionalAssets: [
          { unit: "asset1", quantity: "10" },
          { unit: "asset2", quantity: "5" },
        ],
      }),
      getMockBlockfrostUtxo({
        address: "address2",
        lovelace: "2000",
        additionalAssets: [{ unit: "asset3", quantity: "20" }],
      }),
      getMockBlockfrostUtxo({
        address: "address3",
        lovelace: "3000",
        additionalAssets: [{ unit: "asset4", quantity: "15" }],
      }),
    ];

    const result = inputsPickAssetByPolicyId(inputs, policyId);

    expect(result).toBeNull();
  });

  it("returns null if inputs array is empty", () => {
    const policyId = "mockPolicyId";
    const inputs: BlockfrostUtxo[] = [];

    const result = inputsPickAssetByPolicyId(inputs, policyId);

    expect(result).toBeNull();
  });
});
