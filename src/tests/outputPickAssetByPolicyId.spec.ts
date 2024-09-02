import { TransactionOutput } from "@cardano-ogmios/schema";

import { getMockAddr } from "./__utils__/getMockAddr";
import { getMockTxOut } from "./__utils__/getMockTxOut";

import { outputPickAssetByPolicyId } from "../outputPickAssetByPolicyId";

describe("outputPickAssetByPolicyId", () => {
  it("returns the asset if the policy ID exists in the output", () => {
    const policyId = "mockPolicyId";
    const asset = `${policyId}.asset1`;
    const output: TransactionOutput = getMockTxOut({
      address: getMockAddr(),
      lovelace: 1000n,
      additionalAssets: {
        [policyId]: {
          asset1: 10n,
        },
      },
    });

    const result = outputPickAssetByPolicyId(output, policyId);

    expect(result).toBe(asset);
  });

  it("returns undefined if the specified policy ID does not exist in the output", () => {
    const policyId = "mockPolicyId";
    const anotherPolicyId = "anotherPolicyId";

    const output: TransactionOutput = getMockTxOut({
      address: getMockAddr(),
      lovelace: 1000n,
      additionalAssets: {
        [anotherPolicyId]: {
          asset1: 10n,
        },
      },
    });

    const result = outputPickAssetByPolicyId(output, policyId);

    expect(result).toBeUndefined();
  });

  it("returns undefined if the output does not have any assets", () => {
    const policyId = "mockPolicyId";
    const output: TransactionOutput = getMockTxOut({
      address: getMockAddr(),
      lovelace: 1000n,
    });

    const result = outputPickAssetByPolicyId(output, policyId);

    expect(result).toBeUndefined();
  });
});
