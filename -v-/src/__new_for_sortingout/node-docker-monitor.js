// https://www.npmjs.com/package/node-docker-monitor
// This library is developed to perform one simple function: help to maintain list of running Docker containers on a single host.

var monitor = require("node-docker-monitor");

monitor({
  onContainerUp: function (container) {
    console.log("Container up: ", container);
  },

  onContainerDown: function (container) {
    console.log("Container down: ", container);
  },
});

//==============[bad]=============
