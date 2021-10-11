// https://www.npmjs.com/package/cli-table3
// This utility allows you to render unicode-aided tables on the command line from your node.js scripts.

//Horizontal Tables
var Table = require("cli-table3");

// instantiate
var table = new Table({
  head: ["TH 1 label", "TH 2 label"],
  colWidths: [100, 200],
});

// table is an Array, so you can `push`, `unshift`, `splice` and friends
table.push(["First value", "Second value"], ["First value", "Second value"]);

console.log(table.toString());

//-------------------
//Vertical Tables

var table2 = new Table();

table2.push({ "Some key": "Some value" }, { "Another key": "Another value" });

console.log(table2.toString());

//==============[GOOD]=============
