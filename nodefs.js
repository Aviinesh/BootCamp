var fs = require("fs");

console.log(1);
fs.readFile("sample.txt",function(err,data){ //error first callback operation, if file cannot be found while reading, it will show error first//
console.log("error is ....."+err);
console.log("Data is ....."+data);
});
console.log(2);

//12Hiiii -> 