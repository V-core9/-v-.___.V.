const {
  logMSG,
  infoMSG,
  warnMSG,
  errorMSG,
} = require("./helpers/loging_function");

if (process.env.NODE_ENV === "production") {

  infoMSG("Running <_ " + process.env.NODE_ENV + " mode _>");

} else if (process.env.NODE_ENV === "development") {

  warnMSG("Running <_ " + process.env.NODE_ENV + " mode _>");
  infoMSG("process.env.NODE_ENV === " + process.env.NODE_ENV);
  logMSG("Hello from app.js");
  infoMSG("Hello from app.js");
  warnMSG("Hello from app.js");
  errorMSG("Hello from app.js");

} else {

  errorMSG(
    "process.env.NODE_ENV === UNDEFINED || WILL EXIT TILL AUTOCORECTING MANUVERS ARE AVAILABLE"
  );

}

window.onclick = (event) => {
    infoMSG(event.target);
}
