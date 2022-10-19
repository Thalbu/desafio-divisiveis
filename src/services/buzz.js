"use strict";

const core = require("../core");

module.exports = (req, res) => {
  const arrayNumeros = core.geradorArraySequencia(100);
  const arrayDivisiveisPor5 = core.divisiveisPor5(arrayNumeros);

  res.send(
    `<h1 style="color: blue">Rota Buzz:</h1><h2>Nessa rota teremos os números de 1 a 100 que são divisíveis por 5</h2><h3>Resposta: ${arrayDivisiveisPor5}</h3>`
  );
};
