import { TxOut } from "@cardano-ogmios/schema";

import { getMockAddr } from "./__utils__/getMockAddr";
import { getMockTxOut } from "./__utils__/getMockTxOut";

import { outputPickAssetByPolicyId } from "../outputPickAssetByPolicyId";
import { outputsPickAssetByPolicyId } from "../outputsPickAssetByPolicyId";

jest.mock("../outputPickAssetByPolicyId");

describe("outputsPickAssetByPolicyId", () => {
  beforeEach(() => {
    (outputPickAssetByPolicyId as jest.Mock).mockClear();
  });

  it("returns the asset and output if the policy ID exists in any of the outputs", () => {
    const policyId = "mockPolicyId";
    const asset = "asset";
    const output: TxOut = getMockTxOut({
      address: getMockAddr(),
      lovelace: 1000n,
    });

    (outputPickAssetByPolicyId as jest.Mock).mockReturnValue(asset);

    const result = outputsPickAssetByPolicyId([output], policyId);

    expect(result).toEqual({
      asset,
      output,
    });
  });

  it("returns null if the specified policy ID does not exist in any of the outputs", () => {
    const policyId = "mockPolicyId";
    const output: TxOut = getMockTxOut({
      address: getMockAddr(),
      lovelace: 1000n,
    });

    (outputPickAssetByPolicyId as jest.Mock).mockReturnValue(undefined);

    const result = outputsPickAssetByPolicyId([output], policyId);

    expect(result).toBe(null);
  });

  it("returns null if there are no outputs", () => {
    const policyId = "mockPolicyId";

    const result = outputsPickAssetByPolicyId([], policyId);

    expect(result).toBe(null);
  });
});
