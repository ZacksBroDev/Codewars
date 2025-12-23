function sumMix(x) {
  let sum = 0;
  //for(let i=0; i < x.length; i++) Be better for arrays
  // For(let i in x) Better for objects arrays
  for (let i in x) {
    // Do not need IF statement to check for number type

    if (typeof x[i] === "string") {
      x[i] = parseInt(x[i]);
    }
    // result += parseInt(n);
    sum += x[i];
    console.log(sum);
  }
  return sum;
}

console.log(sumMix([9, 3, "7", "3"])); 