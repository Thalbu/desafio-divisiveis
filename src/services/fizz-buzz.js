"use strict";

const core = require("../core");

module.exports = (req, res) => {
  const arrayNumeros = core.geradorArraySequencia(100);
  const arrayDivisiveisPor3e5 = core.divisiveisPor3e5(arrayNumeros);

  res.send(
    `<h1 style="color: blue">Rota FizzBuzz:</h1><h2>Nessa rota teremos os números de 1 a 100 que são divisíveis por 3 e por 5 ao mesmo tempo</h2><h3>Resposta: ${arrayDivisiveisPor3e5}</h3>`
  );
};
