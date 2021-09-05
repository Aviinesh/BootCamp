var express = require("express"); 
var app = express();

app.get("/student",function(req,res){
    var studentObj= {"name":"raj","marks":90};
    res.json(studentObj);
})

app.listen(4000,function(){
    console.log("server started successfully...")
});