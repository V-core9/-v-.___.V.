/*jshint esversion: 8 */

const {Command, flags} = require('@oclif/command')

class WifiPasswordCommand extends Command {
  async run() {
    const {flags} = this.parse(WifiPasswordCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\wifi-password.js`)

    const wifiPassword = require('wifi-password');
 
    wifiPassword().then(password => {
        console.log(password);
        //=> 'johndoesecretpassword'
    });

  }
}

WifiPasswordCommand.description = `Get current wifi password
...
wifi-password -> https://www.npmjs.com/package/wifi-password
3.0.1 • Public • Published 4 years ago

npm install wifi-password

------------------------------
const wifiPassword = require('wifi-password');
 
wifiPassword().then(password => {
    console.log(password);
    //=> 'johndoesecretpassword'
});
-------------------------------------

Repository
-> github.com/kevva/wifi-password

Homepage
-> github.com/kevva/wifi-password#readme
`

WifiPasswordCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = WifiPasswordCommand
