//1. IMPORTACION
//express y el ruteador de express
//const express=require('express');
const router = require("express").Router();
//const indexController = require("./../controllers");
//no es necesario integrar el archivo index
//si cambias esl nombre entonces si hay q agregarlo
const home = require("./../controllers");

//2.RUTA
//Rutas GET son para mostrar vistas
router.get("/", home);

//Rutas POST enviar datos
module.exports = router;
