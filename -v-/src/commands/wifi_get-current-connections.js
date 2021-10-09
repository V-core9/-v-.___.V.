const {Command, flags} = require('@oclif/command')

class WifiGetCurrentConnectionsCommand extends Command {
  async run() {
    const {flags} = this.parse(WifiGetCurrentConnectionsCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\wifi_get-current-connections.js`)
  }
}

WifiGetCurrentConnectionsCommand.description = `Describe the command here
...
Node-WiFi - Describe the command here

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

WifiGetCurrentConnectionsCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = WifiGetCurrentConnectionsCommand
