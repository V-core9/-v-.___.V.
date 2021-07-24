const { logMSG, infoMSG, warnMSG, errorMSG} = require("./helpers/loging_function");

//> WebVitals 
// import { getLCP, getFCP, getFID, getCLS, getTTFB } from "web-vitals";
// 
// function logDelta({ name, id, delta }) {
//   console.log(`${name} matching ID ${id} changed by ${delta}`);
// }
// 
// getCLS(logDelta);
// getFCP(logDelta);
// getFID(logDelta);
// getLCP(logDelta);
// getTTFB(logDelta);


import PF from "page-fps";

const pf = new PF();


// IsOnline NPM require
const isOnline = require("is-online");
//check if is online
(async () => {
  console.log(await isOnline());
  //=> true
  infoMSG("YEA WE ARE ONLINE")
})();
// END IsOnline

if (process.env.NODE_ENV === "production") {
  infoMSG("Running <_ " + process.env.NODE_ENV + " mode _>");
} else if (process.env.NODE_ENV === "development") {
  warnMSG("Running <_ " + process.env.NODE_ENV + " mode _>");
  infoMSG("process.env.NODE_ENV === " + process.env.NODE_ENV);
} else {
  errorMSG(
    "process.env.NODE_ENV === UNDEFINED || WILL EXIT TILL AUTOCORECTING MANUVERS ARE AVAILABLE"
  );
}

window.onclick = (event) => {
  event.preventDefault()
  event.stopPropagation();
  logMSG("onclick:" + JSON.stringify(event))
  if (!pf.g) {
    pf.start()
    console.log(pf)
    pf.g.c.setAttribute('style', " position: fixed; bottom: unset; left: 5px; top: 5px; width: 160px; height: 28px;")
    pf.g.c.setAttribute("width", "160");
    pf.g.c.setAttribute("height", "28");
    pf.g.ctx.fillStyle = "lime";
    pf.g.ctx.font = "20px monospace";
    pf.g.ctx.textBaseline = "top";
  }
}

window.oncontextmenu = (event) => {
  event.preventDefault();
  event.stopPropagation();
  pf.stop();
  infoMSG("oncontextmenu:" + JSON.stringify(event));
};


window.onload = (event) => {
  event.preventDefault();
  event.stopPropagation();
  infoMSG("ONLOAD:"+JSON.stringify(event));
};
