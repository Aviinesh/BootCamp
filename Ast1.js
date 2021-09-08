//Program to print Prime Numbers from 1 to a given number n
for(var p=0; p<=100; p++){
    if(p/p == 1){
        console.log(p);
    }
}

//Program to swap two variables
var a = 20;
var b = 10;

console.log("a after swapping is:" + b);
console.log("b after swapping is:" + a);


function cToF(36.88) 
{
  var cTemp = 36.88;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}
 
var day;
switch (new Date()) {
  case 0:
    day = "Weekday";
    break;
  case 1:
    day = "Weekend";
}
console.log("Today is " + day);