const {Command, flags} = require('@oclif/command')
const si = require('systeminformation');

class SysNetConnCommand extends Command {
  async run() {
    const {flags} = this.parse(SysNetConnCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_net_conn.js`)
    // networkConnections
    si.networkConnections()
    .then(data => console.log(data))
    .catch(error => console.error(error));
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
