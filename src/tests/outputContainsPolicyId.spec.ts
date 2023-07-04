import { TxOut } from "@cardano-ogmios/schema";

import { getMockAddr } from "./__utils__/getMockAddr";
import { getMockTxOut } from "./__utils__/getMockTxOut";

import { outputContainsPolicyId } from "../outputContainsPolicyId";

describe("outputContainsPolicyId", () => {
  it("returns true if the output contains assets with the specified policy ID", () => {
    const policyId = "mockPolicyId";
    const assetWithPolicyId = `${policyId}.mockAsset`;
    const output: TxOut = getMockTxOut({
      address: getMockAddr(),
      lovelace: 1000n,
      additionalAssets: {
        [assetWithPolicyId]: 10n,
      },
    });

    const result = outputContainsPolicyId(output, policyId);

    expect(result).toBe(true);
  });

  it("returns false if the output does not contain assets with the specified policy ID", () => {
    const policyId = "mockPolicyId";
    const assetWithoutPolicyId = "mockAsset";
    const output: TxOut = getMockTxOut({
      address: getMockAddr(),
      lovelace: 1000n,
      additionalAssets: {
        [assetWithoutPolicyId]: 10n,
      },
    });

    const result = outputContainsPolicyId(output, policyId);

    expect(result).toBe(false);
  });

  it("returns false if the output does not have any assets", () => {
    const policyId = "mockPolicyId";
    const output: TxOut = getMockTxOut({
      address: getMockAddr(),
      lovelace: 1000n,
    });

    const result = outputContainsPolicyId(output, policyId);

    expect(result).toBe(false);
  });
});
