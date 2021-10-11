// https://www.npmjs.com/package/is-docker
// Check if the process is running inside a Docker container

import isDocker from "is-docker";

if (isDocker()) {
  console.log("Running inside a Docker container");
} else {
  console.log("NOT _>- Running inside a Docker container");
}

//==============[GOOD]=============
