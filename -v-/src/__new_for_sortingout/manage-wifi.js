// https://www.npmjs.com/package/manage-wifi

import { wifi } from "manage-wifi";

wifi.off();
console.log("Wi-Fi is off");

wifi.on();
console.log("Wi-Fi is on");

const name = wifi.device();
console.log(name);
// macOS => 'en0';
// Windows => 'USB\VID_0BD...'

//==============[BAD]=============
