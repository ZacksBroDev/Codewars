var uniqueInOrder = function (iterable) {
  let arr = Array.isArray(iterable) ? iterable : iterable.split("");
  return arr.filter((el, i) => el !== arr[i - 1]);
  // return [...iterable].filter((a, i) => a !== iterable[i-1])
};
