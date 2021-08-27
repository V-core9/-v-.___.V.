const {Command, flags} = require('@oclif/command')

class SysProcessesCommand extends Command {
  async run() {
    const {flags} = this.parse(SysProcessesCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_processes.js`)
  }
}

SysProcessesCommand.description = `Describe the command here
...
Extra documentation goes here
`

SysProcessesCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysProcessesCommand
