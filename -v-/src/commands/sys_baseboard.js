const {Command, flags} = require('@oclif/command')
const si = require('systeminformation');

class SysBaseboardCommand extends Command {
  async run() {
    const {flags} = this.parse(SysBaseboardCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_baseboard.js`)
    // baseboard
    si.baseboard()
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }
}

SysBaseboardCommand.description = `Describe the command here
...
Extra documentation goes here
`

SysBaseboardCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysBaseboardCommand
