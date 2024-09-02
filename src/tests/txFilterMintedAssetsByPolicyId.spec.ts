import { Transaction } from "@cardano-ogmios/schema";

import { txFilterMintedAssetsByPolicyId } from "../txFilterMintedAssetsByPolicyId";

describe("txFilterMintedAssetsByPolicyId", () => {
  it("returns the minted assets matching the policy ID", () => {
    const policyId = "mockPolicy";
    const tx: Transaction = {
      mint: {
        [policyId]: { asset1: 1n, asset2: 2n },
        ["anotherPolicy"]: {
          asset3: 3n,
        },
      },
    } as unknown as Transaction;

    const result = txFilterMintedAssetsByPolicyId(tx, policyId);

    expect(result).toEqual([`${policyId}.asset1`, `${policyId}.asset2`]);
  });

  it("returns an empty array if no minted assets match the policy ID", () => {
    const policyId = "mockPolicy";
    const tx: Transaction = {
      mint: {
        assets: {
          ["anotherPolicy"]: {
            ["asset1"]: 1n,
          },
        },
      },
    } as unknown as Transaction;

    const result = txFilterMintedAssetsByPolicyId(tx, policyId);

    expect(result).toEqual([]);
  });

  it("returns an empty array if no minted assets exist", () => {
    const policyId = "mockPolicy";
    const tx: Transaction = {
      mint: {},
    } as Transaction;

    const result = txFilterMintedAssetsByPolicyId(tx, policyId);

    expect(result).toEqual([]);
  });
});
