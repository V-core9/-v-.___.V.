const {Command, flags} = require('@oclif/command')

class SysNetConnCommand extends Command {
  async run() {
    const {flags} = this.parse(SysNetConnCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_net_conn.js`)
  }
}

SysNetConnCommand.description = `Describe the command here
...
Extra documentation goes here
`

SysNetConnCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysNetConnCommand
