import { getMockBlockfrostUtxo } from "./__utils__/getMockBlockfrostUtxo";

import { inputsPickByPolicyId } from "../inputsPickByPolicyId";
import { BlockfrostUtxo } from "../types";

describe("inputsPickByPolicyId", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns the input that contains the specified policy ID", () => {
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
        additionalAssets: [{ unit: "asset2", quantity: "20" }],
      }),
      getMockBlockfrostUtxo({
        address: "address3",
        lovelace: "3000",
        additionalAssets: [{ unit: "asset3", quantity: "30" }],
      }),
    ];

    const result = inputsPickByPolicyId(inputs, policyId);

    expect(result).toBe(inputs[0]);
  });

  it("returns null if no input contains the specified policy ID", () => {
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

    const result = inputsPickByPolicyId(inputs, policyId);

    expect(result).toBeNull();
  });

  it("returns null if inputs array is empty", () => {
    const policyId = "mockPolicyId";
    const inputs: BlockfrostUtxo[] = [];

    const result = inputsPickByPolicyId(inputs, policyId);

    expect(result).toBeNull();
  });
});
