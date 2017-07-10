var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.Promise = require('bluebird');
mongoose.connect("mongodb://127.0.0.1/fotos");

var tipo_sexo = ["M", "F"];

var email_match = [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Coloca un email valido"]


var user_schema = new Schema({
  name: String,
  username: {type: String, require: true, maxlength: [50,"El tamaño maximo es de 50 caracteres"], minlength: [8,"el tamaño minimo es de 8 caracteres"]},
  password: {type: String, minlength: [8, "el tamaño minimo es de 8 caracteres"]},
  age: {type: Number, min: [1,"la edad minima es de 1 año"], max: [100,"la edad maxima es de 100 años"]},
  email: {type: String, require: "El correo es obligatorio", match: email_match},
  date_of_birth: Date
  sexo: {type: String, enum: {values: tipo_sexo, message: "Solo se aceptan valores de M y F"}}
});

user_schema.virtual("password_confirmation").get(function(){
  return this.p_c;
}).set(function(password){
  this.p_c = password;
});

 //mongoose.model es el contructor de modelo, 1 parametro es nombre del modelo y el 2 es el shcema
var User = mongoose.model("User",user_schema);

//toda la comunicacion con mongodb es por modelos.

module.exports.User = User;
