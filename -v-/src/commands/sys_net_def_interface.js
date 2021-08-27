const {Command, flags} = require('@oclif/command')

class SysNetDefInterfaceCommand extends Command {
  async run() {
    const {flags} = this.parse(SysNetDefInterfaceCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_net_def_interface.js`)
  }
}

SysNetDefInterfaceCommand.description = `Describe the command here
...
Extra documentation goes here
`

SysNetDefInterfaceCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysNetDefInterfaceCommand
