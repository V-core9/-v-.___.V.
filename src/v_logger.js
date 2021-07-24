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
  //logMSG("Hello from app.js");
  //infoMSG("Hello from app.js");
  //warnMSG("Hello from app.js");
  //errorMSG("Hello from app.js");
} else {
  errorMSG(
    "process.env.NODE_ENV === UNDEFINED || WILL EXIT TILL AUTOCORECTING MANUVERS ARE AVAILABLE"
  );
}

window.onclick = (event) => {
    infoMSG(JSON.stringify(event));
}


document.body.click();
