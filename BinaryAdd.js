function addBinary(a, b) {
  let sum = a + b;
  if (sum === 0) {
    return "0";
  }

  let binary = "";
  while (sum > 0) {
    binary = (sum % 2) + binary;
    sum = Math.floor(sum / 2);
  }
  return binary;
}

console.log(addBinary(5, 9)); // Expected: "1110"
console.log(addBinary(0, 0)); // Expected: "0"
console.log(addBinary(1, 1)); // Expected: "10"
