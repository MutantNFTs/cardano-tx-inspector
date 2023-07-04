import { getMockBlockfrostUtxo } from "./__utils__/getMockBlockfrostUtxo";

import { inputsContainPolicyId } from "../inputsContainPolicyId";

describe("inputsContainPolicyId", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns true if any input contains the policy ID", () => {
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
        additionalAssets: [{ unit: "asset2", quantity: "5" }],
      }),
      getMockBlockfrostUtxo({
        address: "address3",
        lovelace: "3000",
        additionalAssets: [],
      }),
    ];

    const result = inputsContainPolicyId(inputs, policyId);

    expect(result).toBe(true);
  });

  it("returns false if no input contains the policy ID", () => {
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
        additionalAssets: [{ unit: "asset2", quantity: "5" }],
      }),
      getMockBlockfrostUtxo({
        address: "address3",
        lovelace: "3000",
        additionalAssets: [],
      }),
    ];

    const result = inputsContainPolicyId(inputs, policyId);

    expect(result).toBe(false);
  });
});
