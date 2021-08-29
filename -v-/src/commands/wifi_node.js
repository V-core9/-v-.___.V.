const { Command, flags } = require("@oclif/command");

class WifiNodeCommand extends Command {
  async run() {
    const { flags } = this.parse(WifiNodeCommand);
    const name = flags.name || "world";
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\wifi_node.js`)

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

    // Connect to a network
    wifi.connect({ ssid: "ssid", password: "password" }, (error) => {
      if (error) {
        console.log(error);
      }
      console.log("Connected");
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

    // Delete a saved network
    // not available on all os for now
    wifi.deleteConnection({ ssid: "ssid" }, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Deleted");
      }
    });

    // List the current wifi connections
    wifi.getCurrentConnections((error, currentConnections) => {
      if (error) {
        console.log(error);
      } else {
        console.log(currentConnections);
        /*
        // you may have several connections
        [
            {
                iface: '...', // network interface used for the connection, not available on macOS
                ssid: '...',
                bssid: '...',
                mac: '...', // equals to bssid (for retrocompatibility)
                channel: <number>,
                frequency: <number>, // in MHz
                signal_level: <number>, // in dB
                quality: <number>, // same as signal level but in %
                security: '...' //
                security_flags: '...' // encryption protocols (format currently depending of the OS)
                mode: '...' // network mode like Infra (format currently depending of the OS)
            }
        ]
        */
      }
    });

    // All functions also return promise if there is no callback given
    wifi
      .scan()
      .then((networks) => {
        // networks
      })
      .catch((error) => {
        // error
      });
  }
}

WifiNodeCommand.description = `Node-WiFi demo that has all the things triggered.
...
Node-WiFi  -  demo that has all the things triggered
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
`;

WifiNodeCommand.flags = {
  name: flags.string({ char: "n", description: "name to print" }),
};

module.exports = WifiNodeCommand;
