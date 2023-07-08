export const areAssetsEqual = (asset1: string, asset2: string) => {
  return asset1.replace(".", "") === asset2.replace(".", "");
};
