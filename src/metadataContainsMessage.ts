import { AuxiliaryData } from "@cardano-ogmios/schema";

import { auxiliaryDataGet674Message } from "./auxiliaryDataGet674Message";
import { BlockfrostTxsMetadata } from "./types";

export const metadataContainsMessage = (
  message: string,
  auxiliaryData: AuxiliaryData | null,
  blockfrostMetadata?: BlockfrostTxsMetadata
) => {
  const msg = auxiliaryDataGet674Message(auxiliaryData, blockfrostMetadata);

  if (msg?.length) {
    return msg.join("").includes(message);
  }

  return false;
};
