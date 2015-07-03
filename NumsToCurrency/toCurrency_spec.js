Test.describe("Some Basic Test",function(){
price1 = 123456;
price2 = 1234;
price3 = 123;
price4 = 123456789012;
Test.assertEquals(toCurrency(price1), "123,456");
Test.assertEquals(toCurrency(price2), "1,234");
Test.assertEquals(toCurrency(price3), "123");
Test.assertEquals(toCurrency(price4), "123,456,789,012");
})
Test.describe("Some Random Test",function(){
function tc_sol(price){
  price=price.toString().split("");
  limit=Math.floor((price.length+2)/3);
  for (i=1;i<limit;i++){
    if (price.length<(i+i/3-1)) break;
    price.splice(price.length-(i*3+i-1),0,",");
  }
  return price.join("");
}
for (k=0;k<20;k++){
  random_price=Math.floor(Math.random()*2000000);
  Test.assertEquals(toCurrency(random_price), tc_sol(random_price));
}
})