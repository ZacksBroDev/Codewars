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
