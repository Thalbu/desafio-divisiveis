"use strict";

module.exports = function removeNumerosArray(array, numeros) {
  return array.filter((numero) => !numeros.includes(numero));
};
