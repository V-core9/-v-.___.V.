const argv = require('yargs-parser')(process.argv.slice(2))
console.log(argv)

const argv2 = require('yargs-parser')('--foo=99 --bar=33')
console.log(argv2)

//==============[GOOD]=============
