var express = require("express"); 
var app = express();

app.use(express.static('public'));


//two types of paraetrs we pass in a GET request :path parameters & query parameters
app.get("/student/:id",function(req,res){
    //id is a path parameter
    //query parameter comes from browser side when url path is provided with a question mark
    console.log(req.query);
    var studentObj= {"name":"raj","marks":90, "id":req.params.id};
    res.json(studentObj);
})

app.post("/student/:id",function(req,res){
    
    var studentObj= {"name":"raj","marks":90, "id":req.params.id};
    res.json(studentObj);
})

app.put("/student/:id",function(req,res){
    
    var studentObj= {"name":"raj","marks":90, "id":req.params.id};
    res.json(studentObj);
})

app.delete("/student/:id",function(req,res){
    
    var studentObj= {"name":"raj","marks":90, "id":req.params.id};
    res.json(studentObj);
})

app.listen(4001,function(){
    console.log("server started successfully...")
});