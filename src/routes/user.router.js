//IMPORTACIONES
const router = require("express").Router();
const { getProfile } = require("./../controllers/user.controller");
//RUTAS
//Obtener vista
//Query params para renderizar la url user/Dulce
router.get("/:user", getProfile);

//EXPORTACION
module.exports = router;
