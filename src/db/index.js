//IMPORTACIONES
const mongoose = require("mongoose");

//FUNCTION
//funcion de declaracion
//o tambien puedes ocupar funcion de declaracion cons connectDB=...
async function connectDB() {
  await mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected a la DB");
}

//EXPORT
module.exports = connectDB;
