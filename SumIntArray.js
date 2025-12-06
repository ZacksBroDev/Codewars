function getSum(a, b) {
  const sum = 0;
  if (a === b) {
    return a;
  }
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  const count = max - min + 1;
  
  return (count * (min + max)) / 2;
}

console.log(getSum(1, 0)); //  1
console.log(getSum(1, 2));//  3
console.log(getSum(0, 1));//  1
console.log(getSum(1, 1)); // 1