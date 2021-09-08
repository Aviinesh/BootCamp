var http = require("http");
var fs = require("fs");

//port and //host - host can be any ip address or your local computer
//by default we use "localhost" to refer to our computer, 127.0.0.1

var port = 3000;
var host ="127.0.0.1";

//create server and serve internal html
// when working with server in http, we use a function with 2 parameters - request & response
//to read from external file 'index.html'
var server = http.createServer(function(req,res){ //request object - browser sends to server & response - server sends to browser
    res.statusCode =200; //whenever you hit a webpage, you get a status code, 200 means success, 400-error, 404-website not available, 401-unauthorized access
    res.setHeader('Content-Type','text/html'); //mentioning what type of file
    fs.readFile("index.html",function(err,data){  
        if(!err){
            res.write(data);
            res.end();
        }
    })
});

server.listen(port,host,function(){  //to run server this is std. syntax
    console.log("server started successfully");
})

//to show a direct output
//var server = http.createServer(function(req,res){
//  res.end("Hello World");
// });

//server.listen(port,host,function){
//  console.log("server started succesfully");
// });