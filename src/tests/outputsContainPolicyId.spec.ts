import { TxOut } from "@cardano-ogmios/schema";

import { getMockAddr } from "./__utils__/getMockAddr";
import { getMockTxOut } from "./__utils__/getMockTxOut";

import { outputContainsPolicyId } from "../outputContainsPolicyId";
import { outputsContainPolicyId } from "../outputsContainPolicyId";

jest.mock("../outputContainsPolicyId");

describe("outputsContainPolicyId", () => {
  beforeEach(() => {
    (outputContainsPolicyId as jest.Mock).mockClear();
  });

  it("returns true if the policy ID exists in any of the outputs", () => {
    const policyId = "mockPolicyId";
    const outputs: TxOut[] = [
      getMockTxOut({
        address: getMockAddr(),
        lovelace: 1000n,
      }),
      getMockTxOut({
        address: getMockAddr(),
        lovelace: 1000n,
      }),
    ];

    (outputContainsPolicyId as jest.Mock)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true);

    const result = outputsContainPolicyId(outputs, policyId);

    expect(result).toBe(true);
  });

  it("returns false if the specified policy ID does not exist in any of the outputs", () => {
    const policyId = "mockPolicyId";
    const outputs: TxOut[] = [
      getMockTxOut({
        address: getMockAddr(),
        lovelace: 1000n,
      }),
      getMockTxOut({
        address: getMockAddr(),
        lovelace: 1000n,
      }),
    ];

    (outputContainsPolicyId as jest.Mock).mockReturnValue(false);

    const result = outputsContainPolicyId(outputs, policyId);

    expect(result).toBe(false);
  });

  it("returns false if there are no outputs", () => {
    const policyId = "mockPolicyId";
    const outputs: TxOut[] = [];

    const result = outputsContainPolicyId(outputs, policyId);

    expect(result).toBe(false);
  });
});
