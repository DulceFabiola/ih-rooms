//1.IMPORTACION
// const mongoose = require("mongoose");
//o usar destructuracion:
const { Schema, model } = require("mongoose");
//2.SCHEMA
//funciona con new o sin new, pero buena practica usa el new
const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true, //no permite espacios
      required: [true, "Username is required"], //dato obligatorio y en caso de no mandarlo, mandar error desde el server
    },
    email: {
      type: String,
      unique: true, //unico email, no permite registrar 2 veces el mimso correo
      lowercase: true, //solo minusculas
      trim: true, //no permite espacios
      match: [/^\S+@\S+\.\S+$/, "Use a valid email"], //validar que sea un correo con una expresion regular
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    imgUrl: String,
  },
  {
    timestamps: true, //date en la q fue creado
  }
);
//3.MODELO
//coleccion con nombre User con la referencia de este esquema
const User = model("User", userSchema);

//4.EXPORTACION
module.exports = User;
