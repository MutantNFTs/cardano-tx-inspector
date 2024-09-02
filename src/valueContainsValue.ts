import { Value } from "@cardano-ogmios/schema";

export const valueContainsValue = (value: Value, expectedValue: Value) => {
  if (value.ada.lovelace < expectedValue.ada.lovelace) {
    return false;
  }

  const expectedValuePoliciesList = Object.keys(value || {}).filter(
    (key) => key !== "ada"
  );

  for (const policyId of expectedValuePoliciesList) {
    const expectedValueAssetsList = Object.keys(
      expectedValue?.[policyId] || {}
    );

    for (const asset of expectedValueAssetsList) {
      const valueAssetQuantity = value?.[policyId]?.[asset];

      if (!valueAssetQuantity) {
        return false;
      }

      if (valueAssetQuantity < (expectedValue?.[policyId]?.[asset] || 0n)) {
        return false;
      }
    }
  }

  return true;
};
