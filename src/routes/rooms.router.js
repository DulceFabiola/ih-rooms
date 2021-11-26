//IMPORTACIONES
const router = require("express").Router();
const { getRooms } = require("./../controllers/rooms.controller");
const { isLoggedIn } = require("./../middlewares/");
//RUTAS
//Renderizar la vista de rooms
router.get("/", isLoggedIn, getRooms);

//EXPORTACION
module.exports = router;
