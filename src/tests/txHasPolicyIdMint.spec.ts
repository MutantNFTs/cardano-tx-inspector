import { Transaction } from "@cardano-ogmios/schema";

import { txHasPolicyIdMint } from "../txHasPolicyIdMint";

describe("txHasPolicyIdMint", () => {
  it("returns true if there are minted assets that match the policy ID", () => {
    const policyId = "mockPolicy";
    const tx: Transaction = {
      mint: {
        [policyId]: { asset1: 1n, asset2: 2n },
        anotherPolicy: {
          asset3: 3n,
        },
      },
    } as unknown as Transaction;

    const result = txHasPolicyIdMint(tx, policyId);

    expect(result).toBeTruthy();
  });

  it("returns false if no minted assets match the policy ID", () => {
    const policyId = "mockPolicy";
    const tx: Transaction = {
      mint: {
        ["anotherPolicy"]: {
          asset1: 1n,
        },
      },
    } as unknown as Transaction;

    const result = txHasPolicyIdMint(tx, policyId);

    expect(result).toBeFalsy();
  });

  it("returns false if no minted assets exist", () => {
    const policyId = "mockPolicy";
    const tx: Transaction = {
      mint: {},
    } as Transaction;

    const result = txHasPolicyIdMint(tx, policyId);

    expect(result).toBeFalsy();
  });
});
