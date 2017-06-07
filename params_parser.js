function parse(req){
	var arreglo_param = [], parametros = {};
	if(req.url.indexOf("?")>0){
		var url_data = req.url.split("?");
		var arreglo_param = url_data[1].split("&");
	}

	for (var i = arreglo_param.length - 1; i >= 0; i--) {
	var param = arreglo_param[i];
	var param_data = param.split("=");
	parametros[param_data[0]] = param_data[1];
	};
	return parametros;
}
//exporta la funcion que necesitamos
module.exports.parse = parse;