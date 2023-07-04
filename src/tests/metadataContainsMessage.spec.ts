import { getAuxiliaryData674Message } from "./__utils__/getAuxiliaryData674Message";

import { auxiliaryDataGet674Message } from "../auxiliaryDataGet674Message";
import { metadataContainsMessage } from "../metadataContainsMessage";

jest.mock("../auxiliaryDataGet674Message");

describe("metadataContainsMessage", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns true if the message is contained in the metadata", () => {
    const message = "mockMessage";
    const auxiliaryData = getAuxiliaryData674Message();

    (auxiliaryDataGet674Message as jest.Mock).mockReturnValueOnce([message]);

    const result = metadataContainsMessage(message, auxiliaryData);

    expect(result).toBe(true);
    expect(auxiliaryDataGet674Message).toHaveBeenCalledWith(auxiliaryData, undefined);
  });

  it("returns true if the message is contained in the metadata after a string join", () => {
    const message = "mockMessage2";
    const auxiliaryData = getAuxiliaryData674Message();

    (auxiliaryDataGet674Message as jest.Mock).mockReturnValueOnce([
      "mockMessage",
      "2",
    ]);

    const result = metadataContainsMessage(
      message,
      getAuxiliaryData674Message()
    );

    expect(result).toBe(true);
    expect(auxiliaryDataGet674Message).toHaveBeenCalledWith(auxiliaryData, undefined);
  });

  it("returns false if the message is not contained in the metadata", () => {
    const message = "mockMessage2";
    const auxiliaryData = getAuxiliaryData674Message();

    (auxiliaryDataGet674Message as jest.Mock).mockReturnValueOnce([
      "mockMessage",
    ]);

    const result = metadataContainsMessage(message, auxiliaryData);

    expect(result).toBe(false);
    expect(auxiliaryDataGet674Message).toHaveBeenCalledWith(auxiliaryData, undefined);
  });

  it("returns false if no message is present in the metadata", () => {
    const message = "mockMessage";
    const auxiliaryData = getAuxiliaryData674Message();

    (auxiliaryDataGet674Message as jest.Mock).mockReturnValueOnce(null);

    const result = metadataContainsMessage(
      message,
      getAuxiliaryData674Message(),
      []
    );

    expect(result).toBe(false);
    expect(auxiliaryDataGet674Message).toHaveBeenCalledWith(auxiliaryData, []);
  });

  it("returns false if the metadata is not provided", () => {
    const message = "mockMessage";

    const result = metadataContainsMessage(message, null, undefined);

    expect(result).toBe(false);
    expect(auxiliaryDataGet674Message).toHaveBeenCalledWith(null, undefined);
  });
});
