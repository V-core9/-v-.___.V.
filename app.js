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

// System Information Printing AND Getting it also
const si = require("systeminformation");
// OS Version
infoMSG(si.version());
// Current Time, UpTime, TimeZone and TimeZone Name
infoMSG(JSON.stringify(si.time()));
// System
si.system(function (data) {
  console.log("       ");
  infoMSG("System:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// bios
si.bios(function (data) {
  console.log("       ");
  infoMSG("BIOS:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// baseboard
si.baseboard(function (data) {
  console.log("       ");
  infoMSG("baseboard:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// System
si.chassis(function (data) {
  console.log("       ");
  infoMSG("System:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// CPU
si.cpu(function (data) {
  console.log("       ");
  infoMSG("CPU:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// cpuFlags
si.cpuFlags(function (data) {
  console.log("       ");
  infoMSG("cpuFlags:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// cpuCache
si.cpuCache(function (data) {
  console.log("       ");
  infoMSG("cpuCache:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// cpuCurrentSpeed
si.cpuCurrentSpeed(function (data) {
  console.log("       ");
  infoMSG("cpuCurrentSpeed:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// cpuTemperature
si.cpuTemperature(function (data) {
  console.log("       ");
  infoMSG("cpuTemperature:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// mem
si.mem(function (data) {
  console.log("       ");
  infoMSG("mem:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// cpuTemperature
si.memLayout(function (data) {
  console.log("       ");
  infoMSG("memLayout:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// battery
si.battery(function (data) {
  console.log("       ");
  infoMSG("battery:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// graphics
si.graphics(function (data) {
  console.log("       ");
  infoMSG("graphics:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// osInfo
si.osInfo(function (data) {
  console.log("       ");
  infoMSG("osInfo:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// uuid
si.uuid(function (data) {
  console.log("       ");
  infoMSG("uuid:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// versions
si.versions(function (data) {
  console.log("       ");
  infoMSG("versions:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// shell
si.shell(function (data) {
  console.log("       ");
  infoMSG("shell:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// users
si.users(function (data) {
  console.log("       ");
  infoMSG("users:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// currentLoad
si.currentLoad(function (data) {
  console.log("       ");
  infoMSG("currentLoad:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// fullLoad
infoMSG("fullLoad: " + si.fullLoad());
// processes
si.processes(function (data) {
  console.log("       ");
  infoMSG("processes:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// services
si.services(function (data) {
  console.log("       ");
  infoMSG("services:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// processLoad
si.processLoad(function (data) {
  console.log("       ");
  infoMSG("processLoad:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// 9. File System
// diskLayout
si.diskLayout(function (data) {
  console.log("       ");
  infoMSG("diskLayout:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// blockDevices
si.blockDevices(function (data) {
  console.log("       ");
  infoMSG("blockDevices:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// disksIO
si.disksIO(function (data) {
  console.log("       ");
  infoMSG("disksIO:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// fsSize
si.fsSize(function (data) {
  console.log("       ");
  infoMSG("fsSize:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// fsOpenFiles
si.fsOpenFiles(function (data) {
  console.log("       ");
  infoMSG("fsOpenFiles:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// fsStats
si.fsStats(function (data) {
  console.log("       ");
  infoMSG("fsStats:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// 10. USB
si.usb(function (data) {
  console.log("       ");
  infoMSG("usb:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// 11. Printer
si.printer(function (data) {
  console.log("       ");
  infoMSG("printer:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// 12. Audio
si.audio(function (data) {
  console.log("       ");
  infoMSG("audio:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// 13. Network related functions
// networkInterfaces
si.networkInterfaces(function (data) {
  console.log("       ");
  infoMSG("networkInterfaces:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// networkInterfaceDefault
infoMSG(si.networkInterfaceDefault());
// networkGatewayDefault
infoMSG(si.networkGatewayDefault());
// networkStats
si.networkStats(function (data) {
  console.log("       ");
  infoMSG("networkStats:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// networkConnections
si.networkConnections(function (data) {
  console.log("       ");
  infoMSG("networkConnections:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// inetChecksite
si.inetChecksite(function (data) {
  console.log("       ");
  infoMSG("inetChecksite:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// inetLatency
infoMSG(si.networkGatewayDefault());
// 14. Wifi
// wifiNetworks
si.wifiNetworks(function (data) {
  console.log("       ");
  infoMSG("wifiNetworks:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// wifiInterfaces
si.wifiInterfaces(function (data) {
  console.log("       ");
  infoMSG("wifiInterfaces:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// wifiConnections
si.wifiConnections(function (data) {
  console.log("       ");
  infoMSG("wifiConnections:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// 15. Bluetooth
// wifiConnections
si.bluetoothDevices(function (data) {
  console.log("       ");
  infoMSG("bluetoothDevices:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// 15. Docker
// dockerInfo
si.dockerInfo(function (data) {
  console.log("       ");
  infoMSG("dockerInfo:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// dockerImages
si.dockerImages(function (data) {
  console.log("       ");
  infoMSG("dockerImages:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// dockerContainers
si.dockerContainers(function (data) {
  console.log("       ");
  infoMSG("dockerContainers:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// dockerContainerStats
si.dockerContainerStats(function (data) {
  console.log("       ");
  infoMSG("dockerContainerStats:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// dockerContainerProcesses
si.dockerContainerStats(function (data) {
  console.log("       ");
  infoMSG("dockerContainerProcesses:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// dockerVolumes
si.dockerVolumes(function (data) {
  console.log("       ");
  infoMSG("dockerVolumes:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// dockerAll
si.dockerAll(function (data) {
  console.log("       ");
  infoMSG("dockerAll:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// 17. Virtual Box
// vboxInfo
si.vboxInfo(function (data) {
  console.log("       ");
  infoMSG("vboxInfo:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// 16. "Get All / Observe" - functions
// getStaticData
si.getStaticData(function (data) {
  console.log("       ");
  infoMSG("getStaticData:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// getDynamicData
si.getDynamicData(function (data) {
  console.log("       ");
  infoMSG("getDynamicData:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});
// getAllData
// si.getAllData(function (data) {
//   console.log("       ");
//   infoMSG("getAllData:");
//   infoMSG(JSON.stringify(data));
//   console.log("       ");
// });
// get
// si.get(function (data) {
//   console.log("       ");
//   infoMSG("get:");
//   infoMSG(JSON.stringify(data));
//   console.log("       ");
// });
// observe
si.observe(function (data) {
  console.log("       ");
  infoMSG("observe:");
  infoMSG(JSON.stringify(data));
  console.log("       ");
});


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
