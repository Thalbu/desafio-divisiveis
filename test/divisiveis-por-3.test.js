"use strict";

const core = require("../src/core");

const { test } = require("tap");

test("divisiveisPor3", (t) => {
  const arrayNumeros = core.geradorArraySequencia(20);
  const arrayDivisiveisPor3 = core.divisiveisPor3(arrayNumeros);

  t.strictSame(arrayDivisiveisPor3, [3, 6, 9, 12, 15, 18]);
  t.end();
});
