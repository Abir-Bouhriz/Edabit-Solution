function sumMinimums(arr) {
    var sum=0;
    var minArr = arr.map(item => Math.min(...item));
    for (var i = 0; i < minArr.length; i++) {
      sum += minArr[i];
    }
    return sum;
  }