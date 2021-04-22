function repeatString(txt, n) {
    if (typeof txt === "string") {
      return txt.repeat(n);
      
    } else {
      return "Not A String !!"
    }
  }