//1.IMPORTACIONES
//importacion de express
//forma moderna para importar: ES6: import express from 'express'
//Sin embargo node no esta actualizado, habria que ocupar un transiptador de codigo
//Babel--> transpilador de codigo: puede ejecutar ES6
const express = require("express");
const app = express();
//se llama index, no hace falta llamarlo en la ruta
const connectDB = require("./db");
//importacionde variables de entorno
//invocamos el metodo config, basta con declararlo una sola vez, porque todos los aechivos se juntan en uno solo
//otra forma de hacer la conexion es: require('dotenv').config();
require("dotenv/config");
//modulo path: evitar la concatenacion del __dirname
const path = require("path");

//2.MIDDLEWARES
//funciones que se ejecutan despues de pedir un req y antes de que el server de una respuesta
//Sirven
//Forma de implementar: archivos estaticos app.use, app.config spn middlewares
//Archivos estaticos son archivos html, css, js del lado del cliente, imagenes
//indicas la ruta de donde esta public
app.use(express.static(path.join(__dirname, "public")));

//Idicar ruta de Views
app.set("views", path.join(__dirname, "views"));

//indicar el motor de vistas: Hbs
app.set("view engine", "hbs");

//Para poder usar req.body hay que decirle a exprees que agrege una configuracion extra
//Meter el middleware urlencoded
//obtener datos que se mandan en los formularios
app.use(express.urlencoded({ extended: true }));
connectDB();
//3.RUTAS
//HOME
//ya no hace falta que entre a index, porque automaticamente toma el archivo con nombre index
//si tiene otro nombre, entonces si hay q agregarlo ./routes/namedelarchivo
app.use("/", require("./routes"));

//LOGIN
app.use("/auth", require("./routes/auth.router"));

//4.EXPORTAR
module.exports = app;
