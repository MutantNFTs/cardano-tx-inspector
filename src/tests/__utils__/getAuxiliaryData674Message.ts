import { AuxiliaryData } from "@cardano-ogmios/schema";

export const getAuxiliaryData674Message = (): AuxiliaryData => {
  const auxiliaryData: AuxiliaryData = {
    hash: "0x0000000",
    body: {
      blob: {
        "674": {
          bytes: "48656c6c6f2c20576f726c6421",
        },
      },
    },
  };

  return auxiliaryData;
};
