// Testing the run for the thing being loaded from
// both cli and browser.
module.exports = {
  logMSG: (msg) => {
    msg = "⟠ LOG: " + msg
    console.log("\x1b[36m%s\x1b[0m", msg);
    if (typeof window != "undefined") {
      document.body.innerHTML += `<div class="AAAAAAAA">${msg}</div>`;
    }
  },
  infoMSG: (msg) => {
    msg = "≙ INFO: " + msg
    console.info("\x1b[1m\x1b[32m%s\x1b[0m", msg)
  },
  warnMSG: (msg) => {
    msg = "⨊ WARN: " + msg
    console.warn("\x1b[1m\x1b[35m%s\x1b[0m", msg)
  },
  errorMSG: (msg) => {
    msg = "⟁ ERROR: " + msg
    console.error("\x1b[1m\x1b[41m%s\x1b[0m ", msg)
    console.log("\x1b[2m\x1b[31m%s\x1b[0m \x1b[1m\x1b[31m","------START OF ERROR TRACE----------")
    console.trace()
    console.log("\x1b[0m\x1b[2m\x1b[31m%s\x1b[0m ",'-------------END OF TRACE----------')
  },
};
