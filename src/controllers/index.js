//en un get no es necesario el proceso asincrono
//Es una forma, de imporatlo como objeto
// exports.home = (req, res) => {
//   res.render("index");
// };

const home = (req, res) => {
  res.render("index");
};

module.exports = home;
