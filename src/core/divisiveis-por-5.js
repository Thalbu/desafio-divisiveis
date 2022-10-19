"use strict";

module.exports = function divisiveisPor5(arrayNumero) {
  return arrayNumero.filter(function (numero) {
    return numero % 5 === 0;
  });
};
