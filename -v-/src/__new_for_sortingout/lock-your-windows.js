// https://www.npmjs.com/package/lock-your-windows
// Activate the Windows lock screen (Win+L), or check if Windows is currently locked.

var lockYourWindows = require('lock-your-windows');

var isLocked = lockYourWindows.isLocked() ? "locked" : "unlocked";
console.log("Windows is currently " + isLocked );

console.log("Locking Windows...");
lockYourWindows.lock();

setTimeout(() => {
  
  isLocked = lockYourWindows.isLocked() ? "locked" : "unlocked";
  console.log("Windows is currently " + isLocked );
}, 500);


//==============[GOOD]=============
