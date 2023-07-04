import { AuxiliaryData } from "@cardano-ogmios/schema";
import { BlockfrostTxsMetadata } from "./types";
import { auxiliaryDataGet674Message } from "./auxiliaryDataGet674Message";

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
