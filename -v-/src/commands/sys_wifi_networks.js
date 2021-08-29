const {Command, flags} = require('@oclif/command')
const si = require('systeminformation');

class SysWifiNetworksCommand extends Command {
  async run() {
    const {flags} = this.parse(SysWifiNetworksCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_wifi_networks.js`)
    // wifiNetworks
    si.wifiNetworks()
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }
}

SysWifiNetworksCommand.description = `An array of available wifi networks
...
Extra documentation goes here
`

SysWifiNetworksCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysWifiNetworksCommand
