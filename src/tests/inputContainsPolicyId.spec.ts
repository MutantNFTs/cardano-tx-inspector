import { getMockAddr } from "./__utils__/getMockAddr";
import { getMockBlockfrostUtxo } from "./__utils__/getMockBlockfrostUtxo";

import { inputContainsPolicyId } from "../inputContainsPolicyId";
import { BlockfrostUtxo } from "../types";

describe("inputContainsPolicyId", () => {
  const policyId = "policyId123";

  it("should return true if input contains an amount with a unit starting with the policyId", () => {
    const input: BlockfrostUtxo = getMockBlockfrostUtxo({
      address: getMockAddr(),
      lovelace: "10",
      additionalAssets: [
        {
          quantity: "1",
          unit: `${policyId}.asset1`,
        },
      ],
    });

    const result = inputContainsPolicyId(input, policyId);
    expect(result).toBe(true);
  });

  it("should return false if input does not contain any amount with a unit starting with the policyId", () => {
    const input: BlockfrostUtxo = getMockBlockfrostUtxo({
      address: getMockAddr(),
      lovelace: "10",
    });

    const result = inputContainsPolicyId(input, policyId);
    expect(result).toBe(false);
  });
});
