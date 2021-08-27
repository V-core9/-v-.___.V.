const {Command, flags} = require('@oclif/command')

class SysGraphicsCommand extends Command {
  async run() {
    const {flags} = this.parse(SysGraphicsCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_graphics.js`)
  }
}

SysGraphicsCommand.description = `Describe the command here
...
Extra documentation goes here
`

SysGraphicsCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysGraphicsCommand
