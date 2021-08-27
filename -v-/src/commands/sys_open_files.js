const {Command, flags} = require('@oclif/command')

class SysOpenFilesCommand extends Command {
  async run() {
    const {flags} = this.parse(SysOpenFilesCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_open_files.js`)
  }
}

SysOpenFilesCommand.description = `Describe the command here
...
Extra documentation goes here
`

SysOpenFilesCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysOpenFilesCommand
