function findDifference(a, b) {
	var a= a[0]*a[1]*a[2]
	var b= b[0]*b[1]*b[2];
  if (a>b) { 
    return a-b;
  } else {
    return b-+a;
  }
}