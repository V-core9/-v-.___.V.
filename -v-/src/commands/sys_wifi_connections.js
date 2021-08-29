const {Command, flags} = require('@oclif/command')
const si = require('systeminformation');

class SysWifiConnectionsCommand extends Command {
  async run() {
    const {flags} = this.parse(SysWifiConnectionsCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_wifi_connections.js`)
    // wifiConnections
    si.wifiConnections()
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }
}

SysWifiConnectionsCommand.description = `List array of active wifi connections
...
Extra documentation goes here
`

SysWifiConnectionsCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysWifiConnectionsCommand
