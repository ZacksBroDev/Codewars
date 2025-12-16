function past(h, m, s) {
  const hoursInMs = h * 60 * 60 * 1000;
  const minutesInMs = m * 60 * 1000;
  const secondsInMs = s * 1000;
  
  // return ((h*3600)+(m*60)+s)*1000;
  return hoursInMs + minutesInMs + secondsInMs;
}

console.log(past(0, 1, 1)); // Expected: 61000
console.log(past(1, 0, 0)); // Expected: 3600000
console.log(past(0, 0, 1)); // Expected: 1000
console.log(past(1, 1, 1)); // Expected: 3661000
console.log(past(0, 0, 0)); // Expected: 0
