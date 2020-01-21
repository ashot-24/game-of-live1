
// var express = require("express");
// var app = express();



// app.get("/google/:search", function(req, res){
//     var search  = req.params.search;

//     res.redirect ('https://www.google.com/search?q=' + search)
    
//     res.send(res.redirect("https://www.google.com/"));
    
//  });
//  app.get("/*",function(req,res){
//     res.send("error" + " " + "error" + "  " + "error" + " ")
//  })

// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });

var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
   res.redirect("index.html");
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
