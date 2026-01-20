Object.defineProperty(String.prototype, "toJadenCase", {
  value: function toJadenCase() {
    // return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
    return this.split(" ")
      .map((word) => word[0].toUpperCase() + word.substring(1))
      .join(" ");
  },
});
