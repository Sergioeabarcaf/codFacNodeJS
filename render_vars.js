var http = require("http"),
	fs = require("fs");


http.createServer(function(req,res){
	fs.readFile("./index.html",function(err,html){
		//copiar html
		var html_string = html.toString();
		//buscar los contenido en {}
		var variables = html_string.match(/[^\{\}]+(?=\})/g);
		//valor de name
		var name = "perro";
		//buscar las conicidencias de name
		for (var i = variables.length - 1; i >= 0; i--) {
			var value = eval(variables[i]);
			//Reemplazar el contenido de {} por el valor de la variable.
			html_string = html_string.replace("{"+variables[i]+"}",value);
		}
		res.writeHead(200,{"Content-Type":"text/html"})
		//mostrar el contenido la copia realizada
		res.write(html_string);
		res.end();
	});
}).listen(8080);


