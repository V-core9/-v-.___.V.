const {Command, flags} = require('@oclif/command')

class SysNetDefGatewayCommand extends Command {
  async run() {
    const {flags} = this.parse(SysNetDefGatewayCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_net_def_gateway.js`)
  }
}

SysNetDefGatewayCommand.description = `Describe the command here
...
Extra documentation goes here
`

SysNetDefGatewayCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysNetDefGatewayCommand
