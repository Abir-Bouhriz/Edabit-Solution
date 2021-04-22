function leapYear(year) {
    if ( Number.isInteger(year/4) && 
         Number.isInteger(year/100) &&  
         Number.isInteger(year/400)) {
      return true;
    }else{
      return false;
    }
   
}