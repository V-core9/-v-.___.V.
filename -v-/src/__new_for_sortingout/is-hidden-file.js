const { isHiddenFile } = require("is-hidden-file");

console.log(isHiddenFile(".git")) // true
console.log(isHiddenFile("README.md")) // false


//==============[GOOD]=============
