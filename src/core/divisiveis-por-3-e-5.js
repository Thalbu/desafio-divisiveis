"use strict";

module.exports = function divisiveisPor3e5(arrayNumero) {
  return arrayNumero.filter(function (numero) {
    return numero % 3 === 0 && numero % 5 === 0;
  });
};
