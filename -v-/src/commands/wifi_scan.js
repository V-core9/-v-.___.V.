const {Command, flags} = require('@oclif/command')

class WifiScanCommand extends Command {
  async run() {
    const {flags} = this.parse(WifiScanCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\wifi_scan.js`)

    var wifi = require("node-wifi");

    // Initialize wifi module
    // Absolutely necessary even to set interface to null
    wifi.init({
      iface: null, // network interface, choose a random wifi interface if set to null
    });

    // Scan networks
    wifi.scan((error, networks) => {
      if (error) {
        console.log(error);
      } else {
        console.log(networks);
        /*
        networks = [
            {
              ssid: '...',
              bssid: '...',
              mac: '...', // equals to bssid (for retrocompatibility)
              channel: <number>,
              frequency: <number>, // in MHz
              signal_level: <number>, // in dB
              quality: <number>, // same as signal level but in %
              security: 'WPA WPA2' // format depending on locale for open networks in Windows
              security_flags: '...' // encryption protocols (format currently depending of the OS)
              mode: '...' // network mode like Infra (format currently depending of the OS)
            },
            ...
        ];
        */
      }
    });

  }
}

WifiScanCommand.description = `Scans for Available Networks
...
Node-WiFi  - Scans for Available Networks
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

`

WifiScanCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = WifiScanCommand
