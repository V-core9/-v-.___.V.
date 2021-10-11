const notifier = require("node-notifier");
const path = require("path");

notifier.notify(
  {
    title: "My awesome title",
    message: "Hello from node, Mr. User!",
    icon: path.join(__dirname, "../static/assets/logo.png"), // Absolute path (doesn't work on balloons)
    sound: true, // Only Notification Center or Windows Toasters
    wait: true, // Wait with callback, until user action is taken against notification, does not apply to Windows Toasters as they always wait or notify-send as it does not support the wait option
  },
  function (err, response, metadata) {
    // Response is response from notification
    // Metadata contains activationType, activationAt, deliveredAt
    console.log("\n++<[ -Sof- :: Call_Back_Function ]>---------");
    console.log(err);
    console.log(response);
    console.log(metadata);
    console.log("==<[ -Eof- :: Call_Back_Function ]>============\n");
  }
);

notifier.on("click", function (notifierObject, options, event) {
  // Triggers if `wait: true` and user clicks notification
  console.log("\n++<[ -Sof- Event Triggered :: click ]>---------");
  console.log(event);
  console.log(notifierObject);
  console.log(options);
  console.log("\n++<[ -Eof- Event Triggered :: click ]>---------");
});

notifier.on("timeout", function (notifierObject, options) {
  // Triggers if `wait: true` and notification closes
  console.log("\n++<[ -Sof- Event Triggered :: timeout ]>---------");
  console.log(notifierObject);
  console.log(options);
  console.log("\n++<[ -Eof- Event Triggered :: timeout ]>---------");
});

notifier.on("dismissed", function (notifierObject, options, event) {
  // Triggers if `wait: true` and user clicks notification
  console.log("\n++<[ -Sof- Event Triggered :: dismissed ]>---------");
  console.log(event);
  console.log(notifierObject);
  console.log(options);
  console.log("\n++<[ -Eof- Event Triggered :: dismissed ]>---------");
});

//==============[GOOD]=============
