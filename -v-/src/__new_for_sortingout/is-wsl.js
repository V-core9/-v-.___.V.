// https://www.npmjs.com/package/is-wsl
// Check if the process is running inside Windows Subsystem for Linux (Bash on Windows)

const isWsl = require("is-wsl");

// When running inside Windows Subsystem for Linux
console.log(isWsl);
//=> true

//==============[GOOD]=============
