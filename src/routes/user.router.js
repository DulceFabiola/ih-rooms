//IMPORTACIONES
const router = require("express").Router();
const { getProfile } = require("./../controllers/user.controller");
//ya no entramos a index, porque se llama index el archivo
const { isLoggedIn } = require("./../middlewares");
//RUTAS
//Obtener vista
//Query params para renderizar la url user/Dulce
router.get("/:user", isLoggedIn, getProfile);

//EXPORTACION
module.exports = router;
