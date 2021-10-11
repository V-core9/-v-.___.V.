// https://www.npmjs.com/package/simple-git
// A lightweight interface for running git commands in any node.js application.

// require the library, main export is a function
const simpleGit = require("simple-git");
const git = simpleGit();

async function status() {
  try {
    const wholeRepoStatus = await git.status();
    console.log(wholeRepoStatus);
    return wholeRepoStatus;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function test() {
  var res = await status();

  console.log(res);
}

test();
