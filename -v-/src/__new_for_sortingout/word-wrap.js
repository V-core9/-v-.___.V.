//  https://www.npmjs.com/package/word-wrap
//  Wrap words to a specified length.

var wrap = require("word-wrap");

console.log(
  wrap(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    { width: 40, indent: "  " }
  )
);
