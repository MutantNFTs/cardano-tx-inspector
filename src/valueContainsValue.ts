import { Value } from "@cardano-ogmios/schema";

export const valueContainsValue = (value: Value, expectedValue: Value) => {
  if (value.coins < expectedValue.coins) {
    return false;
  }

  const expectedValuePoliciesList = Object.keys(value.assets || {});

  for (const asset of expectedValuePoliciesList) {
    const valueAssetQuantity = value.assets?.[asset];

    if (!valueAssetQuantity) {
      return false;
    }

    if (valueAssetQuantity < (expectedValue.assets?.[asset] || 0n)) {
      return false;
    }
  }

  return true;
};
