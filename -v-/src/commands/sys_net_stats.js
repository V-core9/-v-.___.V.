const {Command, flags} = require('@oclif/command')
const si = require('systeminformation');

class SysNetStatsCommand extends Command {
  async run() {
    const {flags} = this.parse(SysNetStatsCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_net_stats.js`)
    // networkStats
    si.networkStats()
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }
}

SysNetStatsCommand.description = `Describe the command here
...
Extra documentation goes here
`

SysNetStatsCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysNetStatsCommand
