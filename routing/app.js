var express = require("express");
var app = express();

app.set("view engine","jade");
//Hace lo mismo que holamundo.js
app.get("/",function(req,res){
	res.render("index");
});

//renderiza cuando se envia un parametro por la url
app.get("/algo",function(req,res){
	res.render("form")
});

//renderiza cuando se envia cualquier texto por la url
app.get("/:nombre",function(req,res){
	//enviar datos con el JSON {}
	res.render("form",{nombre: req.params.nombre})
});

app.post("/",function(req,res){
	res.render("form")

});

app.listen(8080);