var http = require("http");
var fs = require("fs");

//port and //host

//by default we use "localhost" to refer to our computer, 127.0.0.1

var port = 3000;
var host ="127.0.0.1";

//create server and serve internal html

var server = http.createServer(function(reqst,resp){
    res.statusCode =200;
    res.setHeader('Content-Type','text/html');
    fs.readFile("internal.html",function(err,data){
        if(!err){
            res.write(data);
            res.end();
        }
    })
})

server.listen(port,host,function(){
    console.log("server started successfully");
})
