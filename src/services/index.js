"use strict";

const express = require("express");

const app = express();

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));

module.exports = {
  buzz: app.get("/Buzz", require("./buzz")),
  fizz: app.get("/Fizz", require("./fizz")),
  fizzBuzz: app.get("/FizzBuzz", require("./fizz-buzz")),
  other: app.get("/Other", require("./other")),
};
