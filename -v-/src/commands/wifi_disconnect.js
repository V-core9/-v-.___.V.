const {Command, flags} = require('@oclif/command')

class WifiDisconnectCommand extends Command {
  async run() {
    const {flags} = this.parse(WifiDisconnectCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\wifi_disconnect.js`)

    var wifi = require("node-wifi");

    // Initialize wifi module
    // Absolutely necessary even to set interface to null
    wifi.init({
      iface: null, // network interface, choose a random wifi interface if set to null
    });

    // Disconnect from a network
    // not available on all os for now
    wifi.disconnect((error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Disconnected");
      }
    });
  }
}

WifiDisconnectCommand.description = `Disconnect from a network
...
Node-WiFi - Disconnect from a network
NOTE: Not available on all os for now!

node-wifi =>  https://www.npmjs.com/package/node-wifi
2.0.15 • Public • Published 18 days ago

# Use as a module
npm install node-wifi

# Use as a CLI
npm install node-wifi -g

Repository
->  github.com/friedrith/node-wifi

Homepage
->  github.com/friedrith/node-wifi#readme

========================
wifi.disconnect(error => {
  if (error) {
    console.log(error);
  } else {
    console.log('Disconnected');
  }
});
=========================
`

WifiDisconnectCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = WifiDisconnectCommand
