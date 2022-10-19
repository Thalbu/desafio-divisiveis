"use strict";

const core = require("../core");

module.exports = async (req, res) => {
  const arrayNumeros = core.geradorArraySequencia(100);
  const arrayDivisiveisPor3e5 = core.divisiveisPor3e5(arrayNumeros);
  const arraySemDivisiveisPor3e5 = await core.removeNumerosArray(
    arrayNumeros,
    arrayDivisiveisPor3e5
  );

  res.send(
    `<h1 style="color: blue">Rota Other:</h1><h2>Nessa rota teremos os números de 1 a 100 que não são divisíveis por 3 e 5 ao mesmo tempo</h2><h3>Resposta: ${arraySemDivisiveisPor3e5}</h3>`
  );
};
