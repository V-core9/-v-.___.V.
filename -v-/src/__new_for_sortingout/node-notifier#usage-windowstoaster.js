// https://www.npmjs.com/package/node-notifier#usage-windowstoaster
//

const path = require("path");
const WindowsToaster = require("node-notifier").WindowsToaster;

var notifier = new WindowsToaster({
  withFallback: false, // Fallback to Growl or Balloons?
  customPath: undefined, // Relative/Absolute path if you want to use your fork of SnoreToast.exe
});

notifier.notify(
  {
    title: "My awesome title", // String. Required
    message: "Hello from node, Mr. User!", // String. Required if remove is not defined
    icon: path.join(__dirname, "../static/assets/logo.png"), // String. Absolute path to Icon (doesn't work on balloons)
    sound: true, // Bool | String (as defined by http://msdn.microsoft.com/en-us/library/windows/apps/hh761492.aspx) Only Notification Center or Windows Toasters
    wait: true, // Wait with callback, until user action is taken against notification, does not apply to Windows Toasters as they always wait or notify-send as it does not support the wait option

    id: 77124, // Number. ID to use for closing notification.
    appID: "V_SAMPLE_CODES", // String. App.ID and app Name. Defaults to no value, causing SnoreToast text to be visible.
    remove: undefined, // Number. Refer to previously created notification to close.
    install: undefined, // String (path, application, app id).  Creates a shortcut <path> in the start menu which point to the executable <application>, appID used for the notifications.
  },
  function (error, response, metadata) {
    console.log(error);
    console.log(response);
    console.log(metadata);
  }
);

//==============[GOOD]=============
