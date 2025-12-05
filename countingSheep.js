/** 
 * count the number bool sheep present
 * @param {Array<boolean>} sheep
 * @returns {int} counting sleep true
 */
function countSheeps(sheep) {
  let sheepCount = 0;
  // return sheep.filter(item => item === true).length;
  for (let i in sheep) {
    if (sheep[i] === true) {
      sheepCount++;
    }
  }
  return sheepCount;
}

console.log(countSheeps()); // 0
console.log(countSheeps([true,  true,  false])); // 2
console.log(countSheeps([true, true, true, false, true])); // 4
console.log(countSheeps([true, true, false, undefined])); // 2
console.log(countSheeps([true, true, false, null])); // 2
console.log(countSheeps([true, true, false, true, true])); // 4