/**
 * Makes a number negative if it's positive, keeps it negative if already negative
 * @param {number} num - The number to make negative
 * @returns {number} The negative version of the number (or 0 if input is 0)
 * @example
 * makeNegative(9)   // returns -9
 * makeNegative(-9)  // returns -9 (stays negative)
 * makeNegative(0)   // returns 0
 */
function makeNegative(num) {
  return num > 0 ? -num : num;
}

// Test cases
console.log(makeNegative(9)); // Expected: -9
console.log(makeNegative(-9)); // Expected: -9
console.log(makeNegative(0)); // Expected: 0
console.log(makeNegative(42)); // Expected: -42
console.log(makeNegative(-42)); // Expected: -42
