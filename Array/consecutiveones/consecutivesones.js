var findMaxConsecutiveOnes = function (nums) {
  let consecutiveOnes = 0;
  let maxConsecutiveOnes = 0;
  for (let value of nums) {
    if (value == 1) {
      consecutiveOnes++;
    } else {
      maxConsecutiveOnes =
        maxConsecutiveOnes < consecutiveOnes
          ? consecutiveOnes
          : maxConsecutiveOnes;
      consecutiveOnes = 0;
    }
  }
  maxConsecutiveOnes =
    maxConsecutiveOnes < consecutiveOnes ? consecutiveOnes : maxConsecutiveOnes;
  return maxConsecutiveOnes;
};
