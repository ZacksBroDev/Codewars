function sumTwoSmallestNumbers(numbers) {
  // numbers = numbers.sort(function(a, b){return a - b; });
  // return numbers[0] + numbers[1];
  let min1, min2;
  for (const num of numbers) {
    if (min1 === undefined || num < min1) {
      min2 = min1;
      min1 = num;
    } else if (min2 === undefined || num < min2) {
      min2 = num;
    }
  }
  return min1 + min2;
}
