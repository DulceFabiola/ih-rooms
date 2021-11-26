const app = require("./app");

//Levavantar el server
app.listen(process.env.PORT, () => {
  console.log(`Listen on http://localhost:${process.env.PORT}`);
});
