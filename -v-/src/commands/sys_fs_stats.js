const {Command, flags} = require('@oclif/command')

class SysFsStatsCommand extends Command {
  async run() {
    const {flags} = this.parse(SysFsStatsCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_fs_stats.js`)
  }
}

SysFsStatsCommand.description = `Describe the command here
...
Extra documentation goes here
`

SysFsStatsCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysFsStatsCommand
