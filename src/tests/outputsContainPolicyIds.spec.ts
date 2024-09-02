import { TransactionOutput } from "@cardano-ogmios/schema";

import { getMockAddr } from "./__utils__/getMockAddr";
import { getMockTxOut } from "./__utils__/getMockTxOut";

import { outputsContainPolicyIds } from "../outputsContainPolicyIds";

describe("outputsContainPolicyIds", () => {
  it("returns true if one of the policy IDs exist in any of the outputs", () => {
    const policyId = "mockPolicyId";
    const policyId2 = "mockPolicyId2";
    const outputs: TransactionOutput[] = [
      getMockTxOut({
        address: getMockAddr(),
        lovelace: 1000n,
        additionalAssets: {
          [policyId]: {
            asset1: 1n,
          },
        },
      }),
      getMockTxOut({
        address: getMockAddr(),
        lovelace: 1000n,
      }),
    ];

    const result = outputsContainPolicyIds(outputs, [policyId, policyId2]);

    expect(result).toBe(true);
  });

  it("returns true if both policy IDs exist in any of the outputs", () => {
    const policyId = "mockPolicyId";
    const policyId2 = "mockPolicyId2";
    const outputs: TransactionOutput[] = [
      getMockTxOut({
        address: getMockAddr(),
        lovelace: 1000n,
        additionalAssets: {
          [policyId]: {
            asset1: 1n,
          },
        },
      }),
      getMockTxOut({
        address: getMockAddr(),
        lovelace: 1000n,
        additionalAssets: {
          [policyId2]: {
            asset1: 1n,
          },
        },
      }),
    ];

    const result = outputsContainPolicyIds(outputs, [policyId, policyId2]);

    expect(result).toBe(true);
  });

  it("returns false if the specified policy ID does not exist in any of the outputs", () => {
    const policyId = "mockPolicyId";
    const policyId2 = "mockPolicyId2";
    const outputs: TransactionOutput[] = [
      getMockTxOut({
        address: getMockAddr(),
        lovelace: 1000n,
        additionalAssets: {
          randomPolicyId: {
            asset1: 1n,
          },
        },
      }),
      getMockTxOut({
        address: getMockAddr(),
        lovelace: 1000n,
        additionalAssets: {
          randomPolicyId2: {
            asset1: 1n,
          },
        },
      }),
    ];

    const result = outputsContainPolicyIds(outputs, [policyId, policyId2]);

    expect(result).toBe(false);
  });

  it("returns false if there are no outputs", () => {
    const policyId = "mockPolicyId";
    const outputs: TransactionOutput[] = [];

    const result = outputsContainPolicyIds(outputs, [policyId]);

    expect(result).toBe(false);
  });
});
