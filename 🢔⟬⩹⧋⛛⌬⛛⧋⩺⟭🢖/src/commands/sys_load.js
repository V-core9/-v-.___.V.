const {Command, flags} = require('@oclif/command')
const si = require('systeminformation');

class SysLoadCommand extends Command {
  async run() {
    const {flags} = this.parse(SysLoadCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\🢔⟬⩹⧋⛛⌬⛛⧋⩺⟭🢖\\src\\commands\\sys_load.js`)

    // LOAD
    si.currentLoad()
    .then(data => console.log(data))
    .catch(error => console.error(error));

  }
}

SysLoadCommand.description = `Current System Load Information & Per Core Stats
...
Extra documentation goes here
`

SysLoadCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysLoadCommand
