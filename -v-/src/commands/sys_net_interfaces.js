const {Command, flags} = require('@oclif/command')

class SysNetInterfacesCommand extends Command {
  async run() {
    const {flags} = this.parse(SysNetInterfacesCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_net_interfaces.js`)
  }
}

SysNetInterfacesCommand.description = `Describe the command here
...
Extra documentation goes here
`

SysNetInterfacesCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysNetInterfacesCommand
