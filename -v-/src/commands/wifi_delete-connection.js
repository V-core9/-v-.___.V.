/*jshint esversion: 8 */

const {Command, flags} = require('@oclif/command')

class WifiDeleteConnectionCommand extends Command {
  async run() {
    const {flags} = this.parse(WifiDeleteConnectionCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\wifi_delete-connection.js`)

    var wifi = require('node-wifi');

    // Initialize wifi module
    // Absolutely necessary even to set interface to null
    wifi.init({
      iface: null // network interface, choose a random wifi interface if set to null
    });

      // Delete a saved network
      // not available on all os for now
      wifi.deleteConnection({ ssid: 'ssid' }, error => {
        if (error) {
          console.log(error);
        } else {
          console.log('Deleted');
        }
      });

  }
}

WifiDeleteConnectionCommand.description = `Delete connection information
...
Node-WiFi - Delete a saved network
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

==================================
wifi.deleteConnection({ ssid: 'ssid' }, error => {
  if (error) {
    console.log(error);
  } else {
    console.log('Deleted');
  }
});
==================================
`

WifiDeleteConnectionCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = WifiDeleteConnectionCommand
