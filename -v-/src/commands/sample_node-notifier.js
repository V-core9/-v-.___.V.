/*jshint esversion: 8 */
const { Command, flags } = require("@oclif/command");

class SampleNodeNotifierCommand extends Command {
  async run() {
    const { flags } = this.parse(SampleNodeNotifierCommand);
    const name = flags.name || "world";
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sample_node-notifier.js`);
    

    const notifier = require('node-notifier');
    const path = require("path");
      
    const notification_install_finished =  {
      title: "🚀 Welcome to [ -⛛- ] CLI tool.", // String. Required
      message: " <[ -v- ]> has just been Installed!\nTry it out with commands:\n$ -v- hello   <= Print Hello Msg\n$ -v- help    <= List Help", // String. Required if remove is not defined
      icon: path.join(__dirname, "../../resources/imgs/load_22.gif"), // Absolute path (doesn't work on balloons)
      sound: false, // Bool | String (as defined by http://msdn.microsoft.com/en-us/library/windows/apps/hh761492.aspx)
      id: 200, // Number. ID to use for closing notification.
      appID: "🢔⟬ 🔥 -v- 🔥 CLI Tool Installer ⟭🢖  ", // String. App.ID and app Name. Defaults to no value, causing SnoreToast text to be visible.
      remove: undefined, // Number. Refer to previously created notification to close.
      install: undefined // String (path, application, app id).  Creates a shortcut <path> in the start menu which point to the executable <application>, appID used for the notifications.
    };
    
    async function notifier_callback (error, response) {
      console.log(response);

      if(error === null) {
        switch (response) {
          case "timeout":
            console.log("⭕ TIMEOUT -> Notification Event");
            break;
          case "dismissed":
            console.log("❎ DISMISSED -> Notification Event");
            break;
          case undefined:
            console.log("✅ TRIGGERED -> Notification Event");
            break;
          default:
            break;
        }
      } else {
        console.log(error);
      }
    }

    // Sample -> Options Object
    // List of options a single notification can use.
    var options = {
      title: undefined,
      subtitle: undefined,
      message: undefined,
      sound: false, // Case Sensitive string for location of sound file, or use one of macOS' native sounds (see below)
      icon: "Terminal Icon", // Absolute Path to Triggering Icon
      contentImage: undefined, // Absolute Path to Attached Image (Content Image)
      open: undefined, // URL to open on Click
      wait: false, // Wait for User Action against Notification or times out. Same as timeout = 5 seconds

      // New in latest version. See `example/macInput.js` for usage
      timeout: 5, // Takes precedence over wait if both are defined.
      closeLabel: undefined, // String. Label for cancel button
      actions: undefined, // String | Array<String>. Action label or list of labels in case of dropdown
      dropdownLabel: undefined, // String. Label to be used if multiple actions
      reply: false, // Boolean. If notification should take input. Value passed as third argument in callback and event emitter.
    };

    notifier.notify( notification_install_finished , (error, response) => { notifier_callback(error, response); } );

  }
}

SampleNodeNotifierCommand.description = `Send cross platform native notifications using Node.js.
...
node-notifier => https://www.npmjs.com/package/node-notifier
10.0.0 • Public • Published 3 months ago

Send cross platform native notifications using Node.js. Notification Center for macOS, notify-osd/libnotify-bin for Linux, Toasters for Windows 8/10, or taskbar balloons for earlier Windows versions. Growl is used if none of these requirements are met. Works well with Electron.

Repository
> github.com/mikaelbr/node-notifier
Homepage
> github.com/mikaelbr/node-notifier#readme

npm install --save node-notifier    

+> CLI Version :: npm i node-notifier-cli
`;

SampleNodeNotifierCommand.flags = {
  name: flags.string({ char: "n", description: "name to print" }),
};

module.exports = SampleNodeNotifierCommand; 
