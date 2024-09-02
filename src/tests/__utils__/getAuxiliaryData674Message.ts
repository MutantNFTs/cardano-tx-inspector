import { Metadata } from "@cardano-ogmios/schema";

export const getAuxiliaryData674Message = (): Metadata => {
  const auxiliaryData: Metadata = {
    hash: "0x0000000",
    labels: {
      "674": {
        json: {
          msg: ["Hello", "World"],
        },
      },
    },
  };

  return auxiliaryData;
};
