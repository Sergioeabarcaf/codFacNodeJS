var express = require("express");
var app = express();

app.set("view engine","jade");
//Hace lo mismo que holamundo.js
app.get("/",function(req,res){
	res.render("index",{hola: "Feliz cumple pizza qlao!"});
});

app.listen(8080);
