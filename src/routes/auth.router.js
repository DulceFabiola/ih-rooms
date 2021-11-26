//IMPORTACIONES
const router = require("express").Router();
//esta es una forma: const authController = require("./../controllers/auth.controller");
// pero como viene en objeto hay q acceder con punto a la propiedad:
//router.get("/signup", authController.getSignup);

///----o puedes usar:
//usar destructuracion de objetos
//sacar las propiedades dentro del objeto y meterlas en variables
const {
  getSignup,
  getLogin,
  postSignup,
} = require("./../controllers/auth.controller");
//RUTAS
//SIGNUP
router.get("/signup", getSignup);
router.post("/signup", postSignup);

//LOGIN
router.get("/login", getLogin);

//EXPORTACION
module.exports = router;
