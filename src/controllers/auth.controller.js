//IMPORTACION DE bcryptjs y del modelo
const bcryptjs = require("bcryptjs");
const mongoose = require("mongoose");
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
  // Create user
  try {
    //1. Encript password
    //A.Veces que se va a revolver, q hace el salt
    const salt = await bcryptjs.genSalt(10);
    //B.Password encriptado
    const hashed = await bcryptjs.hash(password, salt);

    //Create user
    const createdUser = await User.create({
      name,
      email,
      password: hashed,
      imgUrl:
        "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png",
    });

    //Evitar pedirle al usuario que despues de que se registre se logee, hay que creear la sesion
    //Creamos la sesion, pero hay q hacer la configuracion de la sesion en un session.js
    //importarlo en el app.js
    req.session.currentUser = {
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      imgUrl: createdUser.imgUrl,
    };
    //Redireccion
    //Redireccion personalizada user/Dulce
    res.redirect(`/user/${createdUser.name}`);
  } catch (error) {
    //VALIDACIONES DESDE EL SERVER
    //mostrar Errores de validacion q agregamos en el modelo
    //Validaciones del servidor
    //Validar email desde servidor
    // _message: 'User validation failed'
    if (error instanceof mongoose.Error.ValidationError) {
      res.render("auth/signup", {
        msg: "Use a valid email",
      });
    }
    //valida q el email ya existe en la DB
    else if (error.code === 11000) {
      res.render("auth/signup", {
        msg: "Email already exist. Try another",
      });
    }
  }
};

//FUNCIONES PARA LOGIN
exports.getLogin = (req, res) => {
  res.render("auth/login");
};

exports.postLogin = async (req, res) => {
  const { email, password } = req.body;

  //Encontrar usuario
  try {
    const findUser = await User.findOne({ email });
    if (!findUser) {
      res.render("auth/login", {
        msg: "User not Found",
      });
      return;
    }

    //Check password
    //contrase;a del form vs findUser.password -->Devulve booleano
    const checkPassword = await bcryptjs.compareSync(
      password,
      findUser.password
    );

    if (!checkPassword) {
      return res.render("auth/login", {
        msg: "Invalid password",
      });
    }
    //Crear la sesion
    req.session.currentUser = {
      _id: findUser._id,
      name: findUser.name,
      email: findUser.email,
      imgUrl: findUser.imgUrl,
    };

    //Redirect
    res.redirect(`/user/${findUser.name}`);
  } catch (error) {
    console.log(error);
  }
};

//CERRAR SESION
exports.postLogout = async (req, res) => {
  //Destruccion de la cookie
  //pasa el mensaje de error
  res.clearCookie("session-token");
  //operador ternario
  req.session.destroy((err) =>
    err ? console.log(e) : res.redirect("/auth/login")
  );
};
