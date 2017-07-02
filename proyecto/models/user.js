var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/fotos", { useMongoClient: true });

var user_schema = new Schema({
  name: String,
  username: String,
  password: String,
  age: Number,
  email: String,
  date_of_birth: Date
});

user_schema.virtual("password_confirmation").get(function(){
  return this.pass_confim;
}).set(function(password){
  this.pass_confim = password;
});


 //mongoose.model es el contructor de modelo, 1 parametro es nombre del modelo y el 2 es el shcema
var User = mongoose.model("User",user_schema);

//toda la comunicacion con mongodb es por modelos.

module.exports.User = User;
