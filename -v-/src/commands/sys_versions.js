const {Command, flags} = require('@oclif/command')
const si = require('systeminformation');

class SysVersionsCommand extends Command {
  async run() {
    const {flags} = this.parse(SysVersionsCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_versions.js`)
    // versions
    si.versions()
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }
}

SysVersionsCommand.description = `Describe the command here
...
Extra documentation goes here
`

SysVersionsCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysVersionsCommand
