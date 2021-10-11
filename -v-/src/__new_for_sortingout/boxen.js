// https://www.npmjs.com/package/boxen
// Create boxes in the terminal

const boxen = require("boxen");

console.log(boxen("unicorn", { padding: 1 }));
/*
┌─────────────┐
│             │
│   unicorn   │
│             │
└─────────────┘
*/

console.log(boxen("unicorn", { padding: 1, margin: 1, borderStyle: "double" }));
/*

   ╔═════════════╗
   ║             ║
   ║   unicorn   ║
   ║             ║
   ╚═════════════╝

*/

console.log(
  boxen("unicorns love rainbows", {
    title: "magical",
    titleAlignment: "center",
  })
);
/*
┌────── magical ───────┐
│unicorns love rainbows│
└──────────────────────┘
*/

//==============[GOOD]=============
