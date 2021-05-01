function sumFive(arr) {
    if (arr.length>5) {
      var sum = 0;
      for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum; 
    } else {
      return 0;
    }
  }