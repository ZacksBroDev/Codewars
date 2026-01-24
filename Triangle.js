function isTriangle(a, b, c) {
  // return a + b > c && a + c > b && c + b > a;
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  }
  return false;
}
