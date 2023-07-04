import { TxBabbage } from "@cardano-ogmios/schema";

import { txHasPolicyIdMint } from "../txHasPolicyIdMint";

describe("txHasPolicyIdMint", () => {
  it("returns true if there are minted assets that match the policy ID", () => {
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

    const result = txHasPolicyIdMint(tx, policyId);

    expect(result).toBeTruthy();
  });

  it("returns false if no minted assets match the policy ID", () => {
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

    const result = txHasPolicyIdMint(tx, policyId);

    expect(result).toBeFalsy();
  });

  it("returns false if no minted assets exist", () => {
    const policyId = "mockPolicy";
    const tx: TxBabbage = {
      body: {
        mint: {},
      },
    } as TxBabbage;

    const result = txHasPolicyIdMint(tx, policyId);

    expect(result).toBeFalsy();
  });
});
