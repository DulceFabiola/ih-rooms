//Crear 2 funciones para las rutas publicas y privadas
//mas corto con un ternario
//next() ejecuta con la siguiente funcion, si no mandalo al /auth/login
const isLoggedIn = (req, res, next) =>
  req.session.currentUser ? next() : res.redirect("/auth/login");

//Ya esta logeado, pero quiere logearse
//Si no esta logeado, next()---> mandalo al form para q se logee
const isLoggedOut = (req, res, next) =>
  req.session.currentUser ? res.redirect("/") : next();

module.exports = {
  isLoggedIn,
  isLoggedOut,
};
