function decimalPart(n) {
    var decimal= (n - Math.floor(n));
    return decimal.toFixed(1);
  }