function sum(numbers) {
  //   return numbers.reduce((a, b) => a + b, 0);
  let sum = 0;
  if (!isNaN(numbers)) {
    return 0;
  }
  for (let i = 0; i < numbers.length; i++) {
    if (numbers.length === 1) {
      return numbers[0];
    }
    sum += numbers[i];
    console.log(sum);
  }
  return sum;
}

console.log(sum([1, 2, 3, 4])); // Output: 10