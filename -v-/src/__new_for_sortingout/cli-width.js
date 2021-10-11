// https://www.npmjs.com/package/cli-width
// Get stdout window width, with four fallbacks, tty, output.columns, a custom environment variable and then a default.

"use strict";

const cliWidth = require("cli-width");

console.log(cliWidth());

//==============[GOOD]=============
