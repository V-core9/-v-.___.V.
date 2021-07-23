(() => {
  var o = {
      566: (o) => {
        o.exports = {
          logMSG: (o) => {
            (o = "⟠ LOG: " + o),
              console.log("[36m%s[0m", o),
              "undefined" != typeof window &&
                (document.body.innerHTML += `<div class="AAAAAAAA">${o}</div>`);
          },
          infoMSG: (o) => {
            (o = "≙ INFO: " + o), console.info("[1m[32m%s[0m", o);
          },
          warnMSG: (o) => {
            (o = "⨊ WARN: " + o), console.warn("[1m[35m%s[0m", o);
          },
          errorMSG: (o) => {
            (o = "⟁ ERROR: " + o),
              console.error("[1m[41m%s[0m ", o),
              console.log("[2m[31m%s[0m [1m[31m", "------START OF ERROR TRACE----------"),
              console.trace(),
              console.log("[0m[2m[31m%s[0m ", "-------------END OF TRACE----------");
          },
        };
      },
    },
    r = {};
  function e(m) {
    var s = r[m];
    if (void 0 !== s) return s.exports;
    var n = (r[m] = { exports: {} });
    return o[m](n, n.exports, e), n.exports;
  }
  (() => {
    const { logMSG: o, infoMSG: r, warnMSG: m, errorMSG: s } = e(566);
    o("Hello from app.js"),
      r("Hello from app.js"),
      m("Hello from app.js"),
      s("Hello from app.js");
  })();
})();
