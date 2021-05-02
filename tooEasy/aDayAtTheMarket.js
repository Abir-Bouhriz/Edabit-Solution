function whoWinsTonight(coins, space, price, size) {
    return parseInt(coins/price)>parseInt(space/size) ?
     "Bill" : 
     parseInt(coins/price)<parseInt(space/size) ?
      "Will" : 
    "Tie";
}