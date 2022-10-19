"use strict";

const core = require("../core");

module.exports = (req, res) => {
  const arrayNumeros = core.geradorArraySequencia(100);
  const arrayDivisiveisPor3 = core.divisiveisPor3(arrayNumeros);

  res.send(
    `<h1 style="color: blue">Rota Fizz:</h1><h2>Nessa rota teremos os números de 1 a 100 que são divisíveis por 3</h2><h3>Resposta: ${arrayDivisiveisPor3}</h3>`
  );
};
