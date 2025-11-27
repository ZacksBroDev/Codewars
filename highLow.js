function highAndLow(numbers) {
  const nums = numbers.split(' ').map(Number);
  let max = Math.max(...nums)
  let min = Math.min(...nums);
  return `${max} ${min}`;
}

console.log(highAndLow("1 2 3 4 5")); // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return 9 -3