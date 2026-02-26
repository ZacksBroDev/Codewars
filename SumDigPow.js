function sumDigPow(a, b) {
  const result = [];

  for (let num = a; num <= b; num++) {
    const digits = String(num).split("").map(Number);
    const sum = digits.reduce(
      (acc, digit, i) => acc + Math.pow(digit, i + 1),
      0,
    );

    if (sum === num) {
      result.push(num);
    }
  }

  return result;
}

// Examples:
// sumDigPow(1, 10) --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// sumDigPow(1, 100) --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// sumDigPow(10, 100) --> [89]
// sumDigPow(90, 100) --> []

module.exports = sumDigPow;
