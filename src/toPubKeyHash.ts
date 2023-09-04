import { toHexAddress } from "./toHexAddress";

export const toPubKeyHash = (paymentAddress: string) => {
  const address = toHexAddress(paymentAddress);

  if (!address) {
    throw new Error("Invalid payment address");
  } else {
    return address.substring(2, 58);
  }
};
