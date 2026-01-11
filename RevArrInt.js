function digitize(n) {
  return String(n).split("").map(Number).reverse();
  // return Array.from(String(n), Number).reverse();
}
