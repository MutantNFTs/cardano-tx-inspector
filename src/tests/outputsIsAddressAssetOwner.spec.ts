import { TransactionOutput } from "@cardano-ogmios/schema";

import { isSameStakeAddress } from "@mutants/cardano-utils";

import { getFakePolicyId } from "./__utils__/getFakePolicyId";
import { getMockAddr } from "./__utils__/getMockAddr";
import { getMockTxOut } from "./__utils__/getMockTxOut";

import { outputsIsAddressAssetOwner } from "../outputsIsAddressAssetOwner";
import { outputsPickByAsset } from "../outputsPickByAsset";

jest.mock("@mutants/cardano-utils");
jest.mock("../outputsPickByAsset");

describe("outputsIsAddressAssetOwner", () => {
  beforeEach(() => {
    (outputsPickByAsset as jest.Mock).mockClear();
    (isSameStakeAddress as jest.Mock).mockClear();
  });

  it("returns true if the address owns the specified asset", () => {
    const addr = getMockAddr();
    const asset = getFakePolicyId() + "." + "mockAsset";
    const output: TransactionOutput = getMockTxOut({
      address: addr,
      lovelace: 1000n,
      additionalAssets: {
        [getFakePolicyId()]: {
          mockAsset: 10n,
        },
      },
    });

    (outputsPickByAsset as jest.Mock).mockReturnValue(output);
    (isSameStakeAddress as jest.Mock).mockReturnValue(true);

    const result = outputsIsAddressAssetOwner([output], addr, asset);

    expect(result).toBe(true);
  });

  it("returns false if the address does not own the specified asset", () => {
    const addr = getMockAddr();
    const asset = getFakePolicyId() + "." + "mockAsset";
    const output: TransactionOutput = getMockTxOut({
      address: getMockAddr(1),
      lovelace: 1000n,
      additionalAssets: {
        [getFakePolicyId()]: {
          mockAsset: 10n,
        },
      },
    });

    (outputsPickByAsset as jest.Mock).mockReturnValue(output);
    (isSameStakeAddress as jest.Mock).mockReturnValue(false);

    const result = outputsIsAddressAssetOwner([output], addr, asset);

    expect(result).toBe(false);
  });

  it("returns false if the specified asset does not exist in the outputs", () => {
    const addr = getMockAddr();
    const asset = "mockAsset";

    (outputsPickByAsset as jest.Mock).mockReturnValue(undefined);
    (isSameStakeAddress as jest.Mock).mockReturnValue(false);

    const result = outputsIsAddressAssetOwner([], addr, asset);

    expect(result).toBe(false);
  });
});
