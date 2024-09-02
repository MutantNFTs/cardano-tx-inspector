import { Metadata, ObjectNoSchema } from "@cardano-ogmios/schema";

import { BlockfrostTxsMetadata } from "./types";

export const auxiliaryDataGet674Message = (
  auxiliaryData: Metadata | null,
  blockfrostMetadata?: BlockfrostTxsMetadata
): string[] | null => {
  if (blockfrostMetadata) {
    const public674label = blockfrostMetadata.find((m) => m.label === "674");

    const maybeMsg = (
      public674label?.json_metadata as unknown as Record<string, string[]>
    )["msg"];

    if (maybeMsg && Array.isArray(maybeMsg)) {
      return maybeMsg;
    }
  } else if (auxiliaryData?.labels?.["674"]) {
    const public674label = auxiliaryData.labels["674"];

    if (public674label.json) {
      const metadataJson = public674label.json as ObjectNoSchema;

      if (Array.isArray(metadataJson?.msg)) {
        return metadataJson.msg as string[];
      }
    }
  }

  return null;
};
