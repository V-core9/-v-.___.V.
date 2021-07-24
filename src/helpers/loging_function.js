// Testing the run for the thing being loaded from
// both cli and browser.
const checkIfNode = false;

var domExists = false;
if (typeof window != "undefined") {
  addToDom = (msg, type = "log") => {
    document.body.innerHTML += `<div class="single_log_msg ${type}">${msg}</div>`;
  };
  domExists = true;
}

function ifRuningInNODE() {
  if (checkIfNode){
    if (typeof module !== "undefined" && module.exports) {
      console.log("this script is running in Node.js");
    } else {
      console.log("this script is not running in Node.js");
    }
  }
}

module.exports = {
  logMSG: (msg) => {
    msg = "⟠ LOG: " + msg
    console.log("\x1b[36m%s\x1b[0m", msg)
    if (domExists) {
      addToDom(msg)
    }
    ifRuningInNODE()
  },
  infoMSG: (msg) => {
    msg = "≙ INFO: " + msg
    console.info("\x1b[1m\x1b[32m%s\x1b[0m", msg)
    if (domExists) {
      addToDom(msg, 'info');
    }
    ifRuningInNODE()
  },
  warnMSG: (msg) => {
    msg = "⨊ WARN: " + msg
    console.warn("\x1b[1m\x1b[35m%s\x1b[0m", msg)
    if (domExists) {
      addToDom(msg, "warn");
    }
    ifRuningInNODE()
  },
  errorMSG: (msg) => {
    msg = "⟁ ERROR: " + msg
    console.error("\x1b[1m\x1b[41m%s\x1b[0m ", msg)
    console.log("\x1b[2m\x1b[31m%s\x1b[0m \x1b[1m\x1b[31m","------START OF ERROR TRACE----------")
    console.trace()
    console.log("\x1b[0m\x1b[2m\x1b[31m%s\x1b[0m ",'-------------END OF TRACE----------')
    if (domExists) {
      addToDom(msg, "error");
    }
    ifRuningInNODE()
  },
};
