var http = require("http");

var manager = function(sol,req){
	console.log("Nueva solicitud");
	req.end("Hola mundo");
}

var server = http.createServer(manager);

server.listen(8080);