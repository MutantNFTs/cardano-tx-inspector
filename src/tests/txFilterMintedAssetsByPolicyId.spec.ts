import { TxBabbage } from "@cardano-ogmios/schema";

import { txFilterMintedAssetsByPolicyId } from "../txFilterMintedAssetsByPolicyId";

describe("txFilterMintedAssetsByPolicyId", () => {
  it("returns the minted assets matching the policy ID", () => {
    const policyId = "mockPolicy";
    const tx: TxBabbage = {
      body: {
        mint: {
          assets: {
            [`${policyId}.asset1`]: { quantity: 1n, policyId },
            [`${policyId}.asset2`]: { quantity: 2n, policyId },
            ["anotherPolicy.asset3"]: {
              quantity: 3n,
              policyId: "anotherPolicy",
            },
          },
        },
      },
    } as unknown as TxBabbage;

    const result = txFilterMintedAssetsByPolicyId(tx, policyId);

    expect(result).toEqual([`${policyId}.asset1`, `${policyId}.asset2`]);
  });

  it("returns an empty array if no minted assets match the policy ID", () => {
    const policyId = "mockPolicy";
    const tx: TxBabbage = {
      body: {
        mint: {
          assets: {
            ["anotherPolicy.asset1"]: {
              quantity: 1n,
              policyId: "anotherPolicy",
            },
          },
        },
      },
    } as unknown as TxBabbage;

    const result = txFilterMintedAssetsByPolicyId(tx, policyId);

    expect(result).toEqual([]);
  });

  it("returns an empty array if no minted assets exist", () => {
    const policyId = "mockPolicy";
    const tx: TxBabbage = {
      body: {
        mint: {},
      },
    } as TxBabbage;

    const result = txFilterMintedAssetsByPolicyId(tx, policyId);

    expect(result).toEqual([]);
  });
});
