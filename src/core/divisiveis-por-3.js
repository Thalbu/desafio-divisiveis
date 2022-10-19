"use strict";

module.exports = function divisiveisPor3(arrayNumero) {
  return arrayNumero.filter(function (numero) {
    return numero % 3 === 0;
  });
};
