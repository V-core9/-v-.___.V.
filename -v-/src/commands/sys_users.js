const {Command, flags} = require('@oclif/command')

class SysUsersCommand extends Command {
  async run() {
    const {flags} = this.parse(SysUsersCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_users.js`)
  }
}

SysUsersCommand.description = `Describe the command here
...
Extra documentation goes here
`

SysUsersCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysUsersCommand
