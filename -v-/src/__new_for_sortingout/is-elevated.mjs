// https://www.npmjs.com/package/is-elevated
// By checking if the process is root on Unix systems or if the user is administrator on Windows.

import isElevated from "is-elevated";

console.log(await isElevated());
//=> false
