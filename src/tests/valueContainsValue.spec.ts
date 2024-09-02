import { Value } from "@cardano-ogmios/schema";

import { getFakeCip68AssetName } from "./__utils__/getFakeCip68AssetName";
import { getFakePolicyId } from "./__utils__/getFakePolicyId";

import { valueContainsValue } from "../valueContainsValue";

describe("valueContainsValue", () => {
  it("should return true when value contains the value provided (ada + assets)", () => {
    const value: Value = {
      ada: {
        lovelace: 5000000n,
      },
      [getFakePolicyId()]: {
        [getFakeCip68AssetName()]: 1n,
      },
    };

    const expectedValue: Value = {
      ada: {
        lovelace: 2000000n,
      },
      [getFakePolicyId()]: {
        [getFakeCip68AssetName()]: 1n,
      },
    };

    expect(valueContainsValue(value, expectedValue)).toBe(true);
  });

  it("should return false when value does not contain suficient ADA", () => {
    const value: Value = {
      ada: {
        lovelace: 5000000n,
      },
      [getFakePolicyId()]: {
        [getFakeCip68AssetName()]: 1n,
      },
    };

    const expectedValue: Value = {
      ada: {
        lovelace: 10000000n,
      },
      [getFakePolicyId()]: {
        [getFakeCip68AssetName()]: 1n,
      },
    };

    expect(valueContainsValue(value, expectedValue)).toBe(false);
  });

  it.only("should return false when value is missing one asset", () => {
    const value: Value = {
      ada: {
        lovelace: 5000000n,
      },
      [getFakePolicyId()]: {
        [getFakeCip68AssetName()]: 1n,
      },
    };

    const expectedValue: Value = {
      ada: {
        lovelace: 5000000n,
      },
      [getFakePolicyId()]: {
        [getFakeCip68AssetName()]: 2n,
      },
    };

    expect(valueContainsValue(value, expectedValue)).toBe(false);
  });

  it("should return true when value matches exactly what is expected", () => {
    const value: Value = {
      ada: {
        lovelace: 5000000n,
      },

      [getFakePolicyId()]: {
        [getFakeCip68AssetName()]: 1n,
      },
    };

    const expectedValue: Value = {
      ada: {
        lovelace: 5000000n,
      },
      [getFakePolicyId()]: {
        [getFakeCip68AssetName()]: 1n,
      },
    };

    expect(valueContainsValue(value, expectedValue)).toBe(true);
  });
});
