var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/fotos");

var user_schema = new Schema({
  name: String,
  username: String,
  password: String,
  age: Number,
  email: String,
  date_of_birth: Date
});


 //mongoose.model es el contructor de modelo, 1 parametro es nombre del modelo y el 2 es el shcema
var User = mongoose.model("User",user_schema);

//toda la comunicacion con mongodb es por modelos.

module.exports.User = User;
