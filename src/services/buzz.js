"use strict";

module.exports = (req, res) => {
  console.log(req.params);
  res.send(`<h1 style="color: blue">${100}</h1>`);
};
