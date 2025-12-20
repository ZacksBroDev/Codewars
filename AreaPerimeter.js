const areaOrPerimeter = function (l, w) {
  // return l == w ? l * w : 2 * (l + w);
  if (l === w) {
    return l * w;
  }
  return 2 * (l + w);
};
