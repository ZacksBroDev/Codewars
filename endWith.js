/**
 * Checks if a string ends with a specific ending
 * @param {string} str - The string to check
 * @param {string} ending - The ending to look for
 * @returns {boolean} True if str ends with ending, false otherwise
 */
function solution(str, ending) {
  return str.endsWith(ending);
}

console.log(solution('abc', 'bc'));    // Expected: true
console.log(solution('abc', 'd'));     // Expected: false
console.log(solution('abc', ''));      // Expected: true
console.log(solution('abcde', 'cde')); // Expected: true
