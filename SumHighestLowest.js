function sumArray(array) {
  if (array === null || array === undefined || array.length < 3) {
    return 0;
  }
  const max = Math.max(...array);
  const min = Math.min(...array);
  array.splice(array.indexOf(max), 1);
  array.splice(array.indexOf(min), 1);

  let sum=0;
  for (let i=0; i < array.length; i++) {
    sum += array[i];
  }
return sum;
}
console.log(sumArray(null));//  0
console.log(sumArray([]));//  0
console.log(sumArray([3]));//  0
console.log(sumArray([3, 5]));//  0
console.log(sumArray([6, 2, 1, 8, 10]));//  16
console.log(sumArray([0, 1, 6, 10, 10]));//  17
console.log(sumArray([-6, -20, -1, -10, -12]));//  -28
console.log(sumArray([-6, 20, -1, 10, -12]));//  3