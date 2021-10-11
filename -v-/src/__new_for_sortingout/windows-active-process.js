const { getActiveProcessName } = require("windows-active-process");
const activeProcess = getActiveProcessName();

console.log(activeProcess);

//==============[GOOD]=============
