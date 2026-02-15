function score(dice) {
  const counts = Array(7).fill(0);
  for (const d of dice) counts[d] += 1;

  const tripleScore = [0, 1000, 200, 300, 400, 500, 600];
  let total = 0;

  for (let face = 1; face <= 6; face += 1) {
    if (counts[face] >= 3) {
      total += tripleScore[face];
      counts[face] -= 3;
    }
  }

  total += counts[1] * 100;
  total += counts[5] * 50;

  return total;
}

// function score(dice) {
//   var dc = [0, 0, 0, 0, 0, 0];
//   var tdr = [1000, 200, 300, 400, 500, 600];
//   var sdr = [100, 0, 0, 0, 50, 0];
//   dice.forEach(function (x) {
//     dc[x - 1]++;
//   });
//   return dc.reduce(function (s, x, i) {
//     return s + (x >= 3 ? tdr[i] : 0) + sdr[i] * (x % 3);
//   }, 0);
// }