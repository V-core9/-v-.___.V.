const {Command, flags} = require('@oclif/command')

class SysUuidCommand extends Command {
  async run() {
    const {flags} = this.parse(SysUuidCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_uuid.js`)
  }
}

SysUuidCommand.description = `Describe the command here
...
Extra documentation goes here
`

SysUuidCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysUuidCommand
