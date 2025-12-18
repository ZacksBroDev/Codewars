function fakeBin(x) {
  // return x.split('').map(n => n < 5 ? 0 : 1).join('');
  // return x.replace(/\d/g, d => d < 5 ? 0 : 1);
  let fakeBinary = "";
  for (let digit of x) {
    if (digit >= 5) {
      fakeBinary += "1";
    } else {
      fakeBinary += "0";
    }
  }
  return fakeBinary;
}

console.log(fakeBin(45385593107843568)); // 01011110001100111
