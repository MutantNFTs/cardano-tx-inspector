import { unsafeMetadatumAsJSON } from "@cardano-ogmios/client";
import { AuxiliaryData } from "@cardano-ogmios/schema";

import { BlockfrostTxsMetadata } from "./types";

export const auxiliaryDataGet674Message = (
  auxiliaryData: AuxiliaryData | null,
  blockfrostMetadata?: BlockfrostTxsMetadata
): string[] | null => {
  if (auxiliaryData?.body.blob) {
    const public674label = auxiliaryData.body.blob["674"];

    if (public674label) {
      const metadataJson = unsafeMetadatumAsJSON(public674label);

      if (Array.isArray(metadataJson?.msg)) {
        return metadataJson.msg;
      }
    }
  } else if (blockfrostMetadata) {
    const public674label = blockfrostMetadata.find((m) => m.label === "674");

    const maybeMsg = (
      public674label?.json_metadata as unknown as Record<string, string[]>
    )["msg"];

    if (maybeMsg && Array.isArray(maybeMsg)) {
      return maybeMsg;
    }
  }

  return null;
};
