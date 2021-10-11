// https://www.npmjs.com/package/apache-md5
// Node.js package for Apache style password encryption using md5.

const md5 = require("apache-md5");

// Encrypting password using apache's md5 algorithm.
const encryptedPassword = md5("mypass");

// Should print true.
console.log(md5("mypass", encryptedPassword) == encryptedPassword);
// Should print false.
console.log(md5("notmypass", encryptedPassword) == encryptedPassword);
