// https://www.npmjs.com/package/is-docker
// Check if the process is running inside a Docker container

import isDocker from "is-docker";

function vIsDocker() {
  if (isDocker()) {
    console.log("Running inside a Docker container");
    return true;
  } else {
    console.log("NOT _>- Running inside a Docker container");
    return false;
  }
}

exports.vIsDocker = vIsDocker;
