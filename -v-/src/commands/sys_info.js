const {Command, flags} = require('@oclif/command')
const si = require('systeminformation');

class SysCommand extends Command {
  async run() {
    const {flags} = this.parse(SysCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_.js`)
    // system
    si.system()
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }
}

SysCommand.description = `Describe the command here
...
Extra documentation goes here
`

SysCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysCommand
