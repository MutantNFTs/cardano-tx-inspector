import { isSameStakeAddr } from "../isSameStakeAddr";
import { toStakeAddress } from "../toStakeAddress";

jest.mock("../toStakeAddress");

describe("isSameStakeAddr", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns true if the stake addresses are the same", () => {
    const addr1 = "stakeAddress1";
    const addr2 = "stakeAddress1";

    const result = isSameStakeAddr(addr1, addr2);

    expect(result).toBe(true);
    expect(toStakeAddress).not.toHaveBeenCalled();
  });

  it("returns true if the converted stake addresses are the same", () => {
    const addr1 = "address1";
    const addr2 = "address2";
    const stakeAddr1 = "convertedStakeAddress1";
    const stakeAddr2 = "convertedStakeAddress1";

    (toStakeAddress as jest.Mock)
      .mockReturnValueOnce(stakeAddr1)
      .mockReturnValueOnce(stakeAddr2);

    const result = isSameStakeAddr(addr1, addr2);

    expect(result).toBe(true);
    expect(toStakeAddress).toHaveBeenCalledTimes(2);
    expect(toStakeAddress).toHaveBeenCalledWith(addr1);
    expect(toStakeAddress).toHaveBeenCalledWith(addr2);
  });

  it("returns false if the stake addresses are different", () => {
    const addr1 = "stakeAddress1";
    const addr2 = "stakeAddress2";

    const result = isSameStakeAddr(addr1, addr2);

    expect(result).toBe(false);
    expect(toStakeAddress).not.toHaveBeenCalled();
  });

  it("returns false if the converted stake addresses are different", () => {
    const addr1 = "address1";
    const addr2 = "address2";
    const stakeAddr1 = "convertedStakeAddress1";
    const stakeAddr2 = "convertedStakeAddress2";

    (toStakeAddress as jest.Mock)
      .mockReturnValueOnce(stakeAddr1)
      .mockReturnValueOnce(stakeAddr2);

    const result = isSameStakeAddr(addr1, addr2);

    expect(result).toBe(false);
    expect(toStakeAddress).toHaveBeenCalledTimes(2);
    expect(toStakeAddress).toHaveBeenCalledWith(addr1);
    expect(toStakeAddress).toHaveBeenCalledWith(addr2);
  });
});
