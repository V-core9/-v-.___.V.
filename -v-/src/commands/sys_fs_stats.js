const {Command, flags} = require('@oclif/command')
const si = require('systeminformation');

class SysFsStatsCommand extends Command {
  async run() {
    const {flags} = this.parse(SysFsStatsCommand)
    const name = flags.name || 'world'
   // this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_fs_stats.js`)
    // fsStats
    si.fsStats()
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }
}

SysFsStatsCommand.description = `Describe the command here
...
Extra documentation goes here
REFERENCE FILE :>> https://systeminformation.io/docker.html 
`

SysFsStatsCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysFsStatsCommand
