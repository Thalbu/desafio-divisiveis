"use strict";

const core = require("../core");

module.exports = (req, res) => {
  const arrayNumeros = core.geradorArraySequencia(100);
  console.log(arrayNumeros);
  res.send(`<h1 style="color: blue">Porta 3000/FizzBuzz ${arrayNumeros}</h1>`);
};
