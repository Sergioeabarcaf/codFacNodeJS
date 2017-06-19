var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use("/estatico",express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","jade");

app.get("/",function(req,res){
	res.render("index");
});

app.get("/login",function(req,res){
	res.render("login");
});

app.listen(8080);
