"use strict";

const express = require("express");

const app = express();

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));

const endpoints = require("./endpoints");

module.exports = {
  buzz: app.get("/Buzz", endpoints.buzz),
  fizz: app.get("/Fizz", endpoints.fizz),
  fizzBuzz: app.get("/FizzBuzz", endpoints.fizzBuzz),
  other: app.get("/Other", endpoints.other),
};
