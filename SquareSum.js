function squareSum(numbers) {
  let sum = 0;
  // return numbers.reduce((sum, num) => sum + num ** 2, 0);
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] * numbers[i];
  }
  return sum;
}

console.log(squareSum([1, 2, 3])); // 14
console.log(squareSum([])); // 0
console.log(squareSum([-1, -2, -3])); // 14
console.log(squareSum([0, 5, 10])); // 125
console.log(squareSum([-5, -5])); // 50
