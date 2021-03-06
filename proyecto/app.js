var express = require("express");
var bodyParser = require("body-parser");
var User = require("./models/user").User;
var session = require("express-session");
var router_app = require("./routes_app");
var session_middleware = require("./middlewares/session");

var app = express();

app.use("/estatico",express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
	secret: "5454sddsfdfsfdg54dfsfs",
	resave: false,
	saveUninitialized: false
}));

app.set("view engine","jade");

app.get("/",function(req,res){
	console.log(req.session.user_id);
	res.render("index");
});

app.get("/signup",function(req,res){
	User.find(function(err,doc){
		console.log(doc);
		res.render("signup");
	});
});

app.get("/login",function(req,res){
		res.render("login");
	});

app.post("/users",function(req,res){
	var user = new User({email: req.body.email,
											username: req.body.username,
											password: req.body.password,
											password_confirmation: req.body.password_confirmation
											});
	console.log(user.password_confirmation);

	user.save().then(function(us){
		res.send("Se guardo exitosamente el usuario");
	},function(err){
		if(err){
				console.log(String(err));
			}
	});
});

app.post("/sessions",function(req,res){
	User.findOne({email: req.body.email,password: req.body.password},function(err,user){
		req.session.user_id = user._id;
		res.send("hola mundo");
	});
});

app.use("/app",session_middleware);
app.use("/app",router_app);

app.listen(8080);
