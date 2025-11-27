function evenOrOdd(number) {
  if(number % 2){ // Add !== 0 for clarity
    return "Odd"
  }
  return "Even"
}

// Tests
console.log(evenOrOdd(2))
console.log(evenOrOdd(3))
console.log(evenOrOdd(-42))
console.log(evenOrOdd(0));

//   return number % 2 === 0 ? "Even" : "Odd"; would be better and shorter