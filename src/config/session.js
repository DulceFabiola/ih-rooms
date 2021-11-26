//IMPORTACIONES
const session = require("express-session");
const MongoStore = require("connect-mongo");

//FUNCTION
//funcion de expresion: meter en una variable la funcion, sessionM=sessionManager
//esta funcion lleva un argumento
const sessionM = (app) => {
  //Seguridad y flexibilidad con servidores externos (Heroku)
  //Al crear la sesion le pasamos los datos del usuario, pero hay q mantenerlo seguro
  //COnfiguracion de Heroku
  app.set("trust proxy", 1);

  //Insertar session
  app.use(
    session({
      secret: process.env.SECRET_WORD,
      resave: true,
      //forzar que se inicie la sesion
      //queremos que inicie hasta que se logee
      saveUninitialized: false,
      cookie: {
        //evitar ataques
        httpOnly: true.valueOf,
        //Edad de la cookie: una hora
        maxAge: 1000 * 60 * 60,
      },
      store: MongoStore.create({
        mongoUrl: process.env.MONGODB,
      }),
    })
  );
};

//EXPORT
module.exports = sessionM;
