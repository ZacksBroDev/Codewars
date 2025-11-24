function findSmallestInt(arr) {
  let smallestInt = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestInt) {
      smallestInt = arr[i];
    }
  }
  return smallestInt;
}