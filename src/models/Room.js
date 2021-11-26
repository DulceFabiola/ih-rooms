//1.IMPORTACION
const { Schema, model } = require("mongoose");

//2.SCHEMA
const roomSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  owner: String,
});

//3.MODELO
//model(nombre de la coleccion, schema)
const Room = model("Room", roomSchema);

//4.EXPORTACION
module.exports = Room;
