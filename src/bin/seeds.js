//Poblar DB
//IMPORTACIONES
const mongoose = require("mongoose");
const Room = require("./../models/Room");
//al ocupar variables de entorno hay q importar dotenv
require("dotenv/config");
//DATA
const rooms = [
  {
    name: "Acapulco",
    description: "Un lugar muy bonito donde esta Martin",
    imageUrl: "https://i.ytimg.com/vi/QNpo-XRXH5g/hqdefault.jpg",
    owner: "konhinclaro@gmail.com",
  },
  {
    name: "Cancun",
    description:
      "Hace calor pero si vas al extranjero es el primer lugar del que te comentan que han visitado en Mexico",
    imageUrl:
      "https://images.adsttc.com/media/images/5b62/9201/f197/cc5a/c800/00b5/large_jpg/6._CASA_CANCUN._TERRAZA.jpg?1533186547",
    owner: "konhinclaro@gmail.com",
  },
];

//CONECTARSE A LA DB

mongoose.connect(process.env.MONGODB);

//POBLAR DB
//Funcion de tipo expresion
const generateRooms = async () => {
  //data a poblar
  await Room.create(rooms);
  console.log("Base de datos poblada");
  mongoose.connection.close();
};

//Invocar la funcion
generateRooms();
