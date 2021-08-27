const {Command, flags} = require('@oclif/command')
const si = require('systeminformation');

class SysDiskLayoutCommand extends Command {
  async run() {
    const {flags} = this.parse(SysDiskLayoutCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_disk_layout.js`)
    // diskLayout
    si.diskLayout()
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }
}

SysDiskLayoutCommand.description = `Describe the command here
...
Extra documentation goes here
`

SysDiskLayoutCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysDiskLayoutCommand
