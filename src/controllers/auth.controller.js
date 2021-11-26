//IMPORTACION DE bcryptjs y del modelo
const bcryptjs = require("bcryptjs");
const User = require("./../models/User");

//FUNCION PARA SIGNUP
exports.getSignup = (req, res) => {
  res.render("auth/signup");
};

//async porque haremos peticiones a la DB
exports.postSignup = async (req, res) => {
  //1.Obtener datos del formulario
  //const username=req.body.username
  //const email=req.body.email
  //const password=req.body.password

  //o puedes usar destructuracion de objetos:
  const { name, email, password } = req.body;

  //2.Validaciones
  //a) Datos vacios
  if ((!name, !email, !password)) {
    return res.render("auth/sigup", {
      msg: "All fields are required",
    });
  }

  //Validar condiciones password
  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

  if (!regex.test(password)) {
    res.render("auth/signup", {
      msg: "Please include 6 charts, 1 number, 1 uppercase,1 lowercase",
    });
    return;
  }
};

//FUNCIONES PARA LOGIN
exports.getLogin = (req, res) => {
  res.render("auth/login");
};
