"use strict";

const core = require("../src/core");

const { test } = require("tap");

test("divisiveisPor5", (t) => {
  const arrayNumeros = core.geradorArraySequencia(20);
  const arrayDivisiveisPor5 = core.divisiveisPor5(arrayNumeros);

  t.strictSame(arrayDivisiveisPor5, [5, 10, 15, 20]);
  t.end();
});
