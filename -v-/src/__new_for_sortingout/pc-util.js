// REF_url >> https://www.npmjs.com/package/pc-util
// This native Node.js module allows you to manage an app's access to parts of device [ Contacts, Disc, Calendar, Camera, Microphone...etc ].
const permissions = require("pc-util");

const types = [
  "contacts",
  "calendar",
  "reminders",
  "full-disk-access",
  "camera",
  "photos",
  "speech-recognition",
  "microphone",
  "accessibility",
  "location",
  "screen",
  "bluetooth",
];

for (const type of types) {
  const status = permissions.getAuthStatus(type);
  console.log(`Access to ${type} is ${status}`);
}

//==============[BAD]=============
