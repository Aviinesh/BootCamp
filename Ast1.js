//Program to print Prime Numbers from 1 to a given number n
function Prime(n=10) {
    for(var p=2; p < n; p++){
        if(n%p == 0) {
            console.log(n);
        }
    }
}

//Q.2) Program to swap two variables
var a = 20;
var b = 10;

console.log("a after swapping is:" + b);
console.log("b after swapping is:" + a);


//Q.3) Print fibonacci series til a given number n


//Q.4) Write a Javascript program to convert celsius to fahrenheit
var CT = 36.88; //degree Celcius
var FT = CT * 9 / 5 + 32; //degree Fahrenheit

console.log("Temperature in Fahrenheit = " + FT)

//Q.5) Write a program using switch statement

var day; 
switch (new Date().getDay()){
    case 0:
        console.log("Today is Sunday");
        break;

    case 1:
        console.log("Today is Monday");
        break;

    case 2:
        console.log("Today is Tuesday");
        break;

    case 3:
        console.log("Today is Wednesday");
        break;
    
    case 4:
        console.log("Today is Thursday");
        break;
    
    case 5:
        console.log("Today is Friday");
        break;

    case 6:
        console.log("Today is Saturday");
        break;
}

var color

switch (color) {
    case "red":
        console.log("red is my favourite");
        break;
    case "white":
        console.log("white I don't like");
        break;
    case "green":
        console.log("green is ok ok");
        break;
}