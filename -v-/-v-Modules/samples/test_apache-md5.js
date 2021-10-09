const md5 = require("apache-md5");

// Encrypting password using apache's md5 algorithm.
const encryptedPassword = md5("mypass");

// Should print true.
console.log("Should print [TRUE]. >>> ")
console.log(md5("mypass", encryptedPassword) == encryptedPassword);
console.log("")
// Should print false.
console.log("Should print [FALSE]. >>> ")
console.log(md5("notmypass", encryptedPassword) == encryptedPassword);
console.log("")
