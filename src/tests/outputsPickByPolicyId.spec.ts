import { TxOut } from "@cardano-ogmios/schema";

import { getMockAddr } from "./__utils__/getMockAddr";
import { getMockTxOut } from "./__utils__/getMockTxOut";

import { outputContainsPolicyId } from "../outputContainsPolicyId";
import { outputsPickByPolicyId } from "../outputsPickByPolicyId";

jest.mock("../outputContainsPolicyId");

describe("outputsPickByPolicyId", () => {
  beforeEach(() => {
    (outputContainsPolicyId as jest.Mock).mockClear();
  });

  it("returns the output that contains the specified policy ID", () => {
    const policyId = "mockPolicyId";
    const output: TxOut = getMockTxOut({
      address: getMockAddr(),
      lovelace: 1000n,
      additionalAssets: {
        [policyId]: 1n,
      },
    });

    (outputContainsPolicyId as jest.Mock).mockReturnValue(true);

    const result = outputsPickByPolicyId([output], policyId);

    expect(result).toEqual(output);
  });

  it("returns null if no output contains the specified policy ID", () => {
    const policyId = "mockPolicyId";
    const output: TxOut = getMockTxOut({
      address: getMockAddr(),
      lovelace: 1000n,
    });

    (outputContainsPolicyId as jest.Mock).mockReturnValue(false);

    const result = outputsPickByPolicyId([output], policyId);

    expect(result).toBe(null);
  });

  it("returns null if there are no outputs", () => {
    const policyId = "mockPolicyId";

    const result = outputsPickByPolicyId([], policyId);

    expect(result).toBe(null);
  });
});
