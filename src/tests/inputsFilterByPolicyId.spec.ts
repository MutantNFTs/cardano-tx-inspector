import { getMockBlockfrostUtxo } from "./__utils__/getMockBlockfrostUtxo";

import { inputsFilterByPolicyId } from "../inputsFilterByPolicyId";
import { BlockfrostUtxo } from "../types";

describe("inputsFilterByPolicyId", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns inputs that contains the specified policy ID", () => {
    const policyId = "mockPolicyId";
    const inputs = [
      getMockBlockfrostUtxo({
        address: "address1",
        lovelace: "1000",
        additionalAssets: [{ unit: "mockPolicyIdasset1", quantity: "10" }],
      }),
      getMockBlockfrostUtxo({
        address: "address2",
        lovelace: "2000",
        additionalAssets: [{ unit: "mockPolicyIdasset2", quantity: "20" }],
      }),
      getMockBlockfrostUtxo({
        address: "address3",
        lovelace: "3000",
        additionalAssets: [{ unit: "asset3", quantity: "30" }],
      }),
    ];

    const result = inputsFilterByPolicyId(inputs, policyId);

    expect(result).toEqual([inputs[0], inputs[1]]);
  });

  it("returns an empty array if no input contains the specified policy ID", () => {
    const policyId = "mockPolicyId";
    const inputs = [
      getMockBlockfrostUtxo({
        address: "address1",
        lovelace: "1000",
        additionalAssets: [{ unit: "asset1", quantity: "10" }],
      }),
      getMockBlockfrostUtxo({
        address: "address2",
        lovelace: "2000",
        additionalAssets: [{ unit: "asset2", quantity: "20" }],
      }),
      getMockBlockfrostUtxo({
        address: "address3",
        lovelace: "3000",
        additionalAssets: [{ unit: "asset3", quantity: "30" }],
      }),
    ];

    const result = inputsFilterByPolicyId(inputs, policyId);

    expect(result).toEqual([]);
  });

  it("returns an empty array if inputs array is empty", () => {
    const policyId = "mockPolicyId";
    const inputs: BlockfrostUtxo[] = [];

    const result = inputsFilterByPolicyId(inputs, policyId);

    expect(result).toEqual([]);
  });
});
