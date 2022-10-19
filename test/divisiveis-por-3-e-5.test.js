"use strict";

const core = require("../src/core");

const { test } = require("tap");

test("divisiveisPor3e5", (t) => {
  const arrayNumeros = core.geradorArraySequencia(20);
  const arrayDivisiveisPor3e5 = core.divisiveisPor3e5(arrayNumeros);

  t.strictSame(arrayDivisiveisPor3e5, [15]);
  t.end();
});
