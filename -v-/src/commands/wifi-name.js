const { Command, flags } = require("@oclif/command");

class WifiNameCommand extends Command {
  async run() {
    const { flags } = this.parse(WifiNameCommand);
    const name = flags.name || "world";
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\wifi-name.js`)
    this.log(`wifi-name.js`)

    const wifiName = require("wifi-name");

    wifiName().then((name) => {
      console.log(name);
      //=> 'wu-tang lan'
    });
  }
}

WifiNameCommand.description = `Get current wifi name
...
wifi-name
3.1.1 • Public • Published 4 years ago

npm install wifi-name

Repository
->  github.com/kevva/wifi-name

Homepage
->  github.com/kevva/wifi-name#readme
`;

WifiNameCommand.flags = {
  name: flags.string({ char: "n", description: "name to print" }),
};

module.exports = WifiNameCommand;
