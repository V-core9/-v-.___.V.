// https://www.npmjs.com/package/is-installed-globally
// Check if your package was installed globally

const isInstalledGlobally = require("is-installed-globally");

// With `npm install your-package`
console.log(isInstalledGlobally);
//=> false

// With `npm install --global your-package`
console.log(isInstalledGlobally);
//=> true

//==============[GOOD]=============
