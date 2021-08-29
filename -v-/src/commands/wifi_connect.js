/*jshint esversion: 8 */

const {Command, flags} = require('@oclif/command')

class WifiConnectCommand extends Command {
  async run() {
    const {flags} = this.parse(WifiConnectCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\wifi_connect.js`)

    var wifi = require("node-wifi");

    // Initialize wifi module
    // Absolutely necessary even to set interface to null
    wifi.init({
      iface: null, // network interface, choose a random wifi interface if set to null
    });

    // Connect to a network
    wifi.connect({ ssid: "ssid", password: "password" }, (error) => {
      if (error) {
        console.log(error);
      }
      console.log("Connected");
    });

  }
}

WifiConnectCommand.description = `Connect to a network
...
Node-WiFi - Connect to a network

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

=============================
wifi.connect({ ssid: 'ssid', password: 'password' }, error => {
  if (error) {
    console.log(error);
  }
  console.log('Connected');
});
============================
`

WifiConnectCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = WifiConnectCommand
