function sumIntervals(intervals) {
  if (intervals.length === 0) {
    return 0;
  }
  intervals.sort((a, b) => a[0] - b[0]);
  let sum = 0;
  let currentStart = intervals[0][0];
  let currentEnd = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (start > currentEnd) {
      sum += currentEnd - currentStart;
      currentStart = start;
      currentEnd = end;
      continue;
    }
    if (end > currentEnd) {
      currentEnd = end;
    }
  }
  sum += currentEnd - currentStart;
  return sum;
}

// function sumIntervals(xs) {
//   let ys = xs.sort(([a, b], [c, d]) => a - c);
//   let m = -Number.MAX_VALUE;
//   let res = 0;
//   for (let [a, b] of ys) {
//     m = Math.max(m, a);
//     res += Math.max(0, b - m);
//     m = Math.max(m, b);
//   }
//   return res;
// }