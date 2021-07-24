const { logMSG, infoMSG, warnMSG, errorMSG } = require("./src/helpers/loging_function")

// Testing the log functions
logMSG("Hello from app.js");
infoMSG("Info message from app.js");
warnMSG("Basic warning about app.js");
errorMSG("Yo yo shit is going down in the app.js");

if (typeof process.env.NODE_ENV !== "undefined") {
    if (process.env.NODE_ENV === "production") {
        infoMSG("PRODUCTION MODE");
    } else if (process.env.NODE_ENV === "development") {
        warnMSG("DEV MODE");
    } else {
        errorMSG("process.env.NODE_ENV must be present! Available modes are ['production', 'development']");
    }
} else {
    errorMSG("process.env.NODE_ENV must be present! Available modes are ['production', 'development']");
}
// Express
require("dotenv").config();
const compression = require("compression");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
// IsOnline NPM require
const isOnline = require("is-online");
//check if is online
(async () => {
  console.log(await isOnline());
  //=> true
  infoMSG("YEA WE ARE ONLINE")
})();
// END IsOnline

if (typeof process.env.NODE_ENV !== "undefined") {
    if (process.env.NODE_ENV === "production") {
        infoMSG("PRODUCTION MODE");
    } else if (process.env.NODE_ENV === "development") {
        warnMSG("DEV MODE");
    } else {
        errorMSG("process.env.NODE_ENV must be present! Available modes are ['production', 'development']");
    }
} else {
    errorMSG("process.env.NODE_ENV must be present! Available modes are ['production', 'development']");
}

const APP_PROTOCOL = process.env.APP_PROTOCOL;
const APP_HOST = process.env.APP_HOST;
const APP_PORT = process.env.APP_PORT;
const APP_FOLDER = process.env.APP_FOLDER;
let APP_URL = APP_PROTOCOL + "://" + APP_HOST; 
if ((APP_PORT == "") || (APP_FOLDER == "")){

    if (APP_PORT != ""){
        APP_URL = APP_URL + ":" + APP_PORT;
    } 
    
    if (APP_FOLDER != ""){
        APP_URL = APP_URL + "/" + APP_FOLDER;
    }

} else {

}

const STATIC = path.resolve(__dirname, "PUBLIC");
const INDEX = path.resolve(STATIC, "index.html");


const app = express();
app.use(bodyParser.json());

// compress all responses
app.use(compression());
// Static content
app.use(express.static(STATIC));

// All GET request handled by INDEX file
app.get("*", function (req, res) {
    res.sendFile(INDEX);
});

// Start server
app.listen(APP_PORT, function () {
  console.log("Server up and running on " + APP_URL);
});
