const {Command, flags} = require('@oclif/command')
const si = require('systeminformation');

class SysServicesCommand extends Command {
  async run() {
    const {flags} = this.parse(SysServicesCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_services.js`)
    // services
    si.services('*')
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }
}

SysServicesCommand.description = `Describe the command here
...
Extra documentation goes here
`

SysServicesCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysServicesCommand
