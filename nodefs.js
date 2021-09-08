var fs = require("fs");

// console.log(1);
// fs.readFile("sample.txt",function(err,data){ //error first callback operation, if file cannot be found while reading, it will show error first//
// console.log("error is ....."+err);
// console.log("Data is ....."+data);
// });
// console.log(2);

console.log(1);

//Asychronous functions needs callbacks
//Sychnronous method to perform step by step functions
var result = fs.readFileSync("sample.txt");
console.log(result.toString());

console.log(2); //first output 1 then Hiii & then output 2



//12Hiiii -> 