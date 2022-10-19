"use strict";

module.exports = function removeNumerosArray(arrayNumero, numerosParaRemover) {
  return arrayNumero.filter(function (numero) {
    return numerosParaRemover.indexOf(numero) === -1;
  });
};
