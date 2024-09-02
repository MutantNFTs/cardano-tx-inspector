import { TransactionOutput } from "@cardano-ogmios/schema";

import { getMockAddr } from "./__utils__/getMockAddr";
import { getMockTxOut } from "./__utils__/getMockTxOut";

import { outputContainsPolicyId } from "../outputContainsPolicyId";
import { outputsPickByUniquePolicyIdAsset } from "../outputsPickByUniquePolicyIdAsset";

jest.mock("../outputContainsPolicyId");

describe("outputsPickByUniquePolicyIdAsset", () => {
  beforeEach(() => {
    (outputContainsPolicyId as jest.Mock).mockClear();
  });

  it("returns the output that contains a single asset with the specified policy ID when the output is a single one", () => {
    const policyId = "mockPolicyId";
    const output: TransactionOutput = getMockTxOut({
      address: getMockAddr(),
      lovelace: 1000n,
      additionalAssets: {
        [policyId]: {
          asset1: 1n,
        },
      },
    });

    (outputContainsPolicyId as jest.Mock).mockReturnValue(true);

    const result = outputsPickByUniquePolicyIdAsset([output], policyId);

    expect(result).toEqual(output);
  });

  it("returns the output that contains a single asset with the specified policy ID when there is more than 1 output", () => {
    const policyId = "mockPolicyId";
    const output: TransactionOutput = getMockTxOut({
      address: getMockAddr(),
      lovelace: 1000n,
      additionalAssets: {
        [policyId]: {
          asset1: 1n,
          asset2: 1n,
        },
      },
    });
    const output2: TransactionOutput = getMockTxOut({
      address: getMockAddr(),
      lovelace: 1000n,
      additionalAssets: {
        [policyId]: {
          asset3: 1n,
        },
      },
    });

    (outputContainsPolicyId as jest.Mock).mockReturnValue(true);

    const result = outputsPickByUniquePolicyIdAsset(
      [output, output2],
      policyId
    );

    expect(result).toEqual(output2);
  });

  it("returns null if no output contains a single asset with the specified policy ID", () => {
    const policyId = "mockPolicyId";
    const asset1 = "mockAsset1";
    const asset2 = "mockAsset2";
    const output: TransactionOutput = getMockTxOut({
      address: getMockAddr(),
      lovelace: 1000n,
      additionalAssets: {
        [policyId]: {
          [asset1]: 1n,
          [asset2]: 1n,
        },
      },
    });

    (outputContainsPolicyId as jest.Mock).mockReturnValue(true);

    const result = outputsPickByUniquePolicyIdAsset([output], policyId);

    expect(result).toBe(null);
  });

  it("returns null if there are no outputs", () => {
    const policyId = "mockPolicyId";

    const result = outputsPickByUniquePolicyIdAsset([], policyId);

    expect(result).toBe(null);
  });
});
