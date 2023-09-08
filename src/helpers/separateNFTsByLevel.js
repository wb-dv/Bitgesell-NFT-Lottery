export const separateNFTsByLevel = (nfts) => {
  return nfts.reduce(
    (acc, currNft) => {
      const lastLevel = acc.at(-1);
      if (lastLevel.length === 0 || lastLevel[0].level === currNft.level) {
        lastLevel.push(currNft);
      } else {
        acc.push([currNft]);
      }
      return acc;
    },
    [[]]
  );
};
