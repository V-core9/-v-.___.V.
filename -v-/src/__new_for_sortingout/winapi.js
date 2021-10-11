// https://www.npmjs.com/package/winapi

//require('winapi').getIdleTime()

var winapi = require("winapi");

console.log("System is idle since %s", winapi.getIdleTime());

// require('winapi').CreateJobGroup()

var winapi2 = require("winapi");
winapi2.CreateJobGroup();

//you can now spawn subprocess and they'll be killed once you died, windows will clean everything up

// require('winapi').GetLastInputInfo()

var winapi3 = require("winapi");

console.log("Last input time is %s", winapi3.GetLastInputInfo());

setTimeout(function () {
  //do not move, it wont change !
  console.log("Last input time is %s", winapi3.GetLastInputInfo());
}, 1000);

// require('winapi').GetChildrenProcess([parentProcessId])

// require('winapi').GetParentProcess([childProcessId])

// require('winapi').GetTickCount()
