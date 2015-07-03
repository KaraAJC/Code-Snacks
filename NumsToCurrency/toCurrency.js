function toCurrency(price){
  var convertedPrice = price.toString();
  if(price.length <= 3) {
     return convertedPrice;
  } else {
    return convertedPrice.replace(/(\d)(?=(\d{3})+$)/g,'$1,');
  }
}