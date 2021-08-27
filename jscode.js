//document.getElementById("firstparagraph").innertext
console.log("Hello World!")

//x+y = 10

var x=5;
var y=5;
var z = x+y;  //arithmetic operation -- addition
console.log(z);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(2**3);

var x=100;
console.log(x);

//Boolean DataType
var ok=true;
var notDone =false;
console.log(notDone);

//String DataType
var str ="This is a doublequote string";
var str1 = 'This is a singlequote string';
console.log(str);
console.log(str1);

//undefined
var k;
console.log(k);

//null
var i=null;

//object contains key and value
var student={"name":"raja","marks":98,"isPassed":true}

//typeof
console.log(typeof(ok));
console.log(typeof(student));

//increment operator  ++
var m=5;
++m;//m =m+1;
console.log(m);

//pre increment vs post increment operator

var n=20;
n++; //n=n+1
console.log(n);

//operator precedence - bodmas rule
console.log(5+2*4-2);
//use of paranthesis - to ignore bodmas & use operators as we want
console.log((5+2)*4-2);
console.log((5+2)*(4-2));

//pre vs post increment operator withthe help of operator precedence
//post increment -
var j=10;
console.log(j++ *5);
console.log(j);
//in 1st step, original value will participate in arithmetic operation
//in 2nd step, value will be incremented

var z=5;
console.log(++z * 10);
console.log(z);
//only after incrementing, the variable will participate in arithmetic operation

//decrement operator
var h=100;
console.log(--h); //h = h-1

console.log(40/0);
console.log(-40/0);

//Some more operators
//Not operator gives boolean output --> means true & false values
console.log(!true) //! is the Not symbol
console.log(!false);
console.log(!0);

//in JS, 0 means false, false, undefined - all these  means false

// == vs === --> purpose is to validate whether LHS = RHS (double equal to vs triple equal to)
console.log(2 == 1+1) //--> true
console.log(2 == 3)
console.log(0 == false); //result will be true, because in JS 0 is considered as false value
console.log(0 === false);

//lt,lte, gt,gte
console.log(2<3);
console.log(3>1);
console.log(4<=2+2);
console.log(5>=2.5+2.5);

//AND or OR operator
//AND - when both conditions are true, output will be true

console.log(10 && 9); //true && true - will check if 1st one is true value, return 2nd one
console.log(0 && true); //if 1st is false value, return 1st one

//OR - represented by ||, when 1 of the conditions satisfy, then output will be true
console.log(10 || 9);
console.log(0 || true);
console.log(9+7 || 9-9); //16, any one should be satisfied, it won't even consider the 2nd operation if 1st is satisfied

//number
//to extract number from a string
console.log(Number("989")); //9000
console.log(Number(123.4567)); //to extract only number before decimal point
console.log(Number("KA0647352")); //result will be NaN --> Not a Number
console.log(isNaN("KA0647352")); //asking JS if it is not a number --. it will return true/false(if it is a no. or not) for isNan operation

//String
var strg1 = "I";
var strg2 ="am";
var strg3 = strg1+" "+strg2+ " a good programmer";  //concatenation --> joining 2 strings
console.log(strg3);
console.log("hi" === 'hi'); //double quotes & singles quotes are same for strings

//string length
var strg4 = "Hello World";
console.log(strg4.length); //length = 11 no. of characters (space will also be considered for string length - hello=5 chara +space + world=5 chara)
console.log(strg4.charAt(0)); //character position for string starts from 0, last chara will be L-1 (total lenth -1)
console.log(strg4.charAt(4)); //will show chara at 5th position
console.log(strg4.indexOf("W")); //indexOf will return position of chara in the string

//slice, substring
var strg5 = "I am a good programmer";
console.log(strg5.slice(1)); //slice - to slice 
console.log(strg5.slice(-4));

console.log(strg5.substr(1,5)); //starting from 1 and returns a total of 5 characters

//Uppercase & lowercase conversions
console.log("GOOD".toLowerCase());
console.log("good".toUpperCase());

//objects
var obj1= {}; //objct literals
var capitals = {"Kerala":"Trivandrum", "Andhra": "Amaravathi"} //JSON Object

//two ways to access JS object properties
//1) using . operator
//2) using [] operator
console.log(capitals.Kerala);


//call by value vs call by reference
var sampleObj={"name" : "raja"};
var sampleObj2 =sampleObj; //address is passed & not value at the address
sampleObj2.name= "Aviinesh";
console.log(sampleObj);
console.log(sampleObj2);


//conditionals - eg. if rains take umbrella, if number>0 print it
//using if statements
var age=19; //change this no. & we will get major or minor in cmd accordingly
if(age>18){   //within parenthesis we write condition should be a true value
    console.log("Major");
}

else{
    console.log("Minor");
}

// if, else if, else
if(age>18 && age<60){
    console.log("Major");
}

else if (age>=60){
    console.log("Senior Citizen")
}

else{
    console.log("Minor");
}

//switch
switch(8-7){
    case 0:
        console.log("inside case 0");
        break;

case 1: console.log("inside case 1");
        break;
}  //switch selects from predefined list of cases

//for loop --> To iterate till condition is met
var count=100;
for(var i=0; i<count; i++){
    console.log("picked"+ i +"th apple");
}

/*
i=0 --> initializing happens only once
i<count --> conditional check
i++ --> increment 
*/

//Program 1 to print whole numbers from 0 to 100
for(var j=0; j<=100; j++){
console.log(j);
}

//Program to print even numbers (even no. is no. divisible by 2)
//Remainder is 0
for(var k=2; k<=100; k++){
    if(k%2 == 0){
        console.log(k);
    }
}

//Program to print odd no. - remainder = 1
for(var m=1; m<=100; m++){
    if(m%2 == 1){
        console.log(m);
    }
}

//palindrome
//Algorithm is the way of solving a problem
//1st make pseudo code - it means a concept that everyone can understand
  /*take the original string
    create an empty string
    reverse the original string & put it in newly created empty string
    check whether the original string & reverse string are same
    if they are same, print them as palindrome, else it is not palindrome
  */
var str9 = "madam";
var str10 = "";
for(var h=str9.length-1; h>=0; h--){
    str10 = str10+ str9.charAt(h);
}
console.log(str10);
if (str9 == str10){
    console.log("it is a palindrome!")
}
else{
    console.log("oohh...not a palindrome!")
}

//for in loop --> to iterate objects
var student={"firstName":"Raja","lastName":"Rama","age":20};
for(var key in student){
    console.log(key);
    console.log(student[key]);
}

//functions
//boilerplate code
//self documented code

function sum(a,b){   //a and b are called parameters
    console.log("inside sum function.....");
    return a+b; //function execution stops here and comes out, so whatever written after return does not execute
    console.log("bye");
}

console.log(sum(10,5));  //10 and 5 are called arguments
console.log(sum(0,-1));

//callbacks
//after execution of 1st task or function, based on the result of that function perform another function
var initialBalance = 15000;
var balanceCredit = function(depositAmount, smsFunction){  //smsFunction is a callback function which takes result and sendSMS
    smsFunction(initialBalance+depositAmount);
}

var sendSMS = function(newBal){
    console.log("Your new account balance is ..."+newBal);
}

balanceCredit(4000,sendsms);
//functions are called as first class objects in JS since fuctions can be passed as arguments and can be declared as parameters
/*var newBal =balanceCredit(2000);
sendSMS(newBal);*/




















