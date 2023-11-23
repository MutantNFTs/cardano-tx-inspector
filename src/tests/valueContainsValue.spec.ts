import { Value } from "@cardano-ogmios/schema";

import { getFakeCip68AssetName } from "./__utils__/getFakeCip68AssetName";
import { getFakePolicyId } from "./__utils__/getFakePolicyId";

import { valueContainsValue } from "../valueContainsValue";

describe("valueContainsValue", () => {
  it("should return true when value contains the value provided (ada + assets)", () => {
    const asset = getFakePolicyId() + "." + getFakeCip68AssetName();

    const value: Value = {
      coins: 5000000n,
      assets: {
        [asset]: 1n,
      },
    };

    const expectedValue: Value = {
      coins: 2000000n,
      assets: {
        [asset]: 1n,
      },
    };

    expect(valueContainsValue(value, expectedValue)).toBe(true);
  });

  it("should return false when value does not contain suficient ADA", () => {
    const asset = getFakePolicyId() + "." + getFakeCip68AssetName();

    const value: Value = {
      coins: 5000000n,
      assets: {
        [asset]: 1n,
      },
    };

    const expectedValue: Value = {
      coins: 10000000n,
      assets: {
        [asset]: 1n,
      },
    };

    expect(valueContainsValue(value, expectedValue)).toBe(false);
  });

  it("should return false when value is missing one asset", () => {
    const asset = getFakePolicyId() + "." + getFakeCip68AssetName();

    const value: Value = {
      coins: 5000000n,
      assets: {
        [asset]: 1n,
      },
    };

    const expectedValue: Value = {
      coins: 5000000n,
      assets: {
        [asset]: 2n,
      },
    };

    expect(valueContainsValue(value, expectedValue)).toBe(false);
  });

  it("should return true when value matches exactly what is expected", () => {
    const asset = getFakePolicyId() + "." + getFakeCip68AssetName();

    const value: Value = {
      coins: 5000000n,
      assets: {
        [asset]: 1n,
      },
    };

    const expectedValue: Value = {
      coins: 5000000n,
      assets: {
        [asset]: 1n,
      },
    };

    expect(valueContainsValue(value, expectedValue)).toBe(true);
  });
});
