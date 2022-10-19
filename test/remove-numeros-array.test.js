"use strict";

const core = require("../src/core");

const { test } = require("tap");

test("removeNumerosArray", (t) => {
  const arrayNumeros = core.geradorArraySequencia(6);
  const numeroParaRemover = [3, 5];
  const arrayComNumerosRemovidos = core.removeNumerosArray(
    arrayNumeros,
    numeroParaRemover
  );

  t.strictSame(arrayComNumerosRemovidos, [1, 2, 4, 6]);
  t.end();
});
