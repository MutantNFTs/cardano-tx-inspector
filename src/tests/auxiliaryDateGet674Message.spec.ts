import { unsafeMetadatumAsJSON } from "@cardano-ogmios/client";
import { AuxiliaryData } from "@cardano-ogmios/schema";

import { auxiliaryDataGet674Message } from "../auxiliaryDataGet674Message";

jest.mock("@cardano-ogmios/client");

describe("auxiliaryDataGet674Message", () => {
  let output: string[] | null;

  describe("when the metadata comes from Ogmios", () => {
    beforeEach(() => {
      (unsafeMetadatumAsJSON as jest.Mock).mockReturnValueOnce({
        msg: ["Hello", "World"],
      });

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

      output = auxiliaryDataGet674Message(auxiliaryData);
    });

    it("should return the message from auxiliary data", () => {
      expect(output).toEqual(["Hello", "World"]);
    });
  });

  describe("when the metadata comes from blockfrost", () => {
    beforeEach(() => {
      output = auxiliaryDataGet674Message(null, [
        {
          label: "674",
          json_metadata: {
            msg: ["Hello", "World"],
          },
        },
      ]);
    });

    it("should return the message from json metadata", () => {
      expect(output).toEqual(["Hello", "World"]);
    });
  });

  describe("when there is no 674 metadata", () => {
    beforeEach(() => {
      const auxiliaryData: AuxiliaryData = {
        hash: "0x0000000",
        body: {
          blob: {
            "675": {
              bytes: "48656c6c6f2c20576f726c6421",
            },
          },
        },
      };

      output = auxiliaryDataGet674Message(auxiliaryData, [
        {
          label: "675",
          json_metadata: {
            msg: ["Hello", "World"],
          },
        },
      ]);
    });

    it("should return null", () => {
      expect(output).toBeNull();
    });
  });
});
