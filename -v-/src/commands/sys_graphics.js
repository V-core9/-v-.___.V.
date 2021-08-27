const {Command, flags} = require('@oclif/command')
const si = require('systeminformation');

class SysGraphicsCommand extends Command {
  async run() {
    const {flags} = this.parse(SysGraphicsCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_graphics.js`)
    // graphics
    si.graphics()
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }
}

SysGraphicsCommand.description = `Describe the command here
...
Extra documentation goes here
`

SysGraphicsCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysGraphicsCommand
