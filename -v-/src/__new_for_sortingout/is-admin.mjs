// https://www.npmjs.com/package/is-admin
// Check if the process is running as administrator on Windows

import isAdmin from "is-admin";

console.log(await isAdmin());
//=> false
