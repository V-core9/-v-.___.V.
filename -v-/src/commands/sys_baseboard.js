const {Command, flags} = require('@oclif/command')
const si = require('systeminformation');

class SiBaseboardCommand extends Command {
  async run() {
    const {flags} = this.parse(SiBaseboardCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_baseboard.js`)
    // baseboard
    si.baseboard()
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }
}

SiBaseboardCommand.description = `Describe the command here
...
Extra documentation goes here
`

SiBaseboardCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SiBaseboardCommand
