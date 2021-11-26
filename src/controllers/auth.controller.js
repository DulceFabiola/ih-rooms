//FUNCION PARA SIGNUP
exports.getSignup = (req, res) => {
  res.render("auth/signup");
};

//FUNCIONES PARA LOGIN
exports.getLogin = (req, res) => {
  res.render("auth/login");
};
