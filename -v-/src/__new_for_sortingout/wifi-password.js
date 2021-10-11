// https://www.npmjs.com/package/wifi-password
// Get current wifi password

const wifiPassword = require("wifi-password");

wifiPassword().then((password) => {
  console.log(password);
  //=> 'johndoesecretpassword'
});
