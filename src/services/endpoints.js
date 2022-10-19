"use strict";

/*
Para otimizar performace coloquei todo o codigo de endpoints dentro de um mesmo arquivo, pois temos a geração estatica de um array que vai de 1 a 100
e a cada rota que é chamada, o array é gerado novamente, o que é desnecessário, pois o array é o mesmo para todas as rotas. Também sendo possivel aproveirar o array
de numeros divisiveis por 3 e 5 ao mesmo tempo, para realizar a filtragem dos numeros que não são divisiveis por 3 e 5.
*/

const core = require("../core");

const arrayNumeros = core.geradorArraySequencia(100);
const arrayDivisiveisPor5 = core.divisiveisPor5(arrayNumeros);
const arrayDivisiveisPor3e5 = core.divisiveisPor3e5(arrayNumeros);
const arrayDivisiveisPor3 = core.divisiveisPor3(arrayNumeros);
const arraySemDivisiveisPor3e5 = core.removeNumerosArray(
  arrayNumeros,
  arrayDivisiveisPor3e5
);

const buzz = (req, res) => {
  res.send(
    `<h1 style="color: blue">Rota Buzz:</h1><h2>Nessa rota teremos os números de 1 a 100 que são divisíveis por 5</h2><h3>Resposta: ${arrayDivisiveisPor5}</h3>`
  );
};

const fizzBuzz = (req, res) => {
  res.send(
    `<h1 style="color: blue">Rota FizzBuzz:</h1><h2>Nessa rota teremos os números de 1 a 100 que são divisíveis por 3 e por 5 ao mesmo tempo</h2><h3>Resposta: ${arrayDivisiveisPor3e5}</h3>`
  );
};

const fizz = (req, res) => {
  res.send(
    `<h1 style="color: blue">Rota Fizz:</h1><h2>Nessa rota teremos os números de 1 a 100 que são divisíveis por 3</h2><h3>Resposta: ${arrayDivisiveisPor3}</h3>`
  );
};

const other = async (req, res) => {
  res.send(
    `<h1 style="color: blue">Rota Other:</h1><h2>Nessa rota teremos os números de 1 a 100 que não são divisíveis por 3 e 5 ao mesmo tempo</h2><h3>Resposta: ${arraySemDivisiveisPor3e5}</h3>`
  );
};

module.exports = { buzz, fizzBuzz, fizz, other };
