const {Command, flags} = require('@oclif/command')
const si = require('systeminformation');

class SysUuidCommand extends Command {
  async run() {
    const {flags} = this.parse(SysUuidCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_uuid.js`)
    // uuid
    si.uuid()
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }
}

SysUuidCommand.description = `object of several UUIDs
...
Extra documentation goes here
`

SysUuidCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysUuidCommand
