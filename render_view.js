function replace_name(html_string,parametros){
	var variables = html_string.match(/[^\{\}]+(?=\})/g);
	for (var i = variables.length - 1; i >= 0; i--) {
		html_string = html_string.replace("{"+variables[i]+"}",parametros[variables[i]]);
	}
	return html_string;
}

module.exports.replace_name = replace_name;
