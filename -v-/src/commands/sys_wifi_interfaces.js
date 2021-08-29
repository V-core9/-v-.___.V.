const {Command, flags} = require('@oclif/command')
const si = require('systeminformation');

class SysWifiInterfacesCommand extends Command {
  async run() {
    const {flags} = this.parse(SysWifiInterfacesCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_wifi_interfaces.js`)
    // wifiInterfaces
    si.wifiInterfaces()
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }
}

SysWifiInterfacesCommand.description = `An array of detected wifi interfaces
...
Extra documentation goes here
`

SysWifiInterfacesCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysWifiInterfacesCommand
