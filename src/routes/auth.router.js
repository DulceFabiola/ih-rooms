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
  postSignup,
  getLogin,
  postLogin,
  postLogout,
} = require("./../controllers/auth.controller");

//middlewares de rutas
const { isLoggedIn, isLoggedOut } = require("./../middlewares");
//RUTAS
//SIGNUP
router.get("/signup", isLoggedOut, getSignup);
router.post("/signup", isLoggedOut, postSignup);

//LOGIN
//renderizar el form
router.get("/login", isLoggedOut, getLogin);
//mandar datos
router.post("/login", isLoggedOut, postLogin);

//LOGOUT
router.post("/logout", isLoggedIn, postLogout);

//EXPORTACION
module.exports = router;
