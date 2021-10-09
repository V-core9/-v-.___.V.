const {Command, flags} = require('@oclif/command')
const si = require('systeminformation');

class SysChassisCommand extends Command {
  async run() {
    const {flags} = this.parse(SysChassisCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_chassis.js`)
    // chassis
    si.chassis()
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }
}

SysChassisCommand.description = `Describe the command here
...
Extra documentation goes here
`

SysChassisCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysChassisCommand
