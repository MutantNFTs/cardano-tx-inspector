import { Metadata } from "@cardano-ogmios/schema";

import { auxiliaryDataGet674Message } from "./auxiliaryDataGet674Message";
import { BlockfrostTxsMetadata } from "./types";

export const metadataContainsMessage = (
  message: string,
  metadata: Metadata | null,
  blockfrostMetadata?: BlockfrostTxsMetadata
) => {
  const msg = auxiliaryDataGet674Message(metadata, blockfrostMetadata);

  if (msg?.length) {
    return msg.join("").includes(message);
  }

  return false;
};
