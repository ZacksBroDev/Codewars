function disemvowel(str) {
  str = str.replace(/[aeiouAEIOU]/g, ""); // Improved: return str.replace(/[aeiouAEIOU]/g, '');
  return str;
}

console.log(disemvowel("This website is for losers LOL!")); // Expected: "Ths wbst s fr lsrs LL!"


//edge case
// if (typeof str !== "string") {
//   return "";
// }