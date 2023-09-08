const getNumberDigit = (number) => {
  let count = 0;

  while (Math.trunc(number / 10)) {
    number = Math.trunc(number / 10);
    count++;
  }

  return count;
};

export const separateHashByWinnersNumber = (hash, ticketsAmount) => {
  const numberDigit = getNumberDigit(ticketsAmount);

  const winnerNumbersIdxs = new Set();

  const separatedHash = hash.split('');

  let winnerNumberCount = 3 * numberDigit;

  for (let i = hash.length - 1; i >= 0; i--) {
    if (winnerNumberCount > 0 && !isNaN(hash[i])) {
      winnerNumberCount--;
      winnerNumbersIdxs.add(i);
    }
  }

  return {
    separatedHash,
    winnerNumbersIdxs,
    winnerNumberCount: 3 * numberDigit,
  };
};
