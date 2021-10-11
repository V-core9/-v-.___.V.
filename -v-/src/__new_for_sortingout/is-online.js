// https://www.npmjs.com/package/is-online

const isOnline = require("is-online");

(async () => {
  console.log(await isOnline());
  //=> true
})();
