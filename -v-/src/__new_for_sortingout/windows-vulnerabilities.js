// https://www.npmjs.com/package/windows-vulnerabilities
// Get the number of known security vulnerabilities for your current windows 10 version

const winVlnr = require("windows-vulnerabilities");

// Get os version and number of known security vulnerabilities
console.log(winVlnr());
//=> '['1607', "842"]'
