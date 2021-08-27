const {Command, flags} = require('@oclif/command')

class SysDiskIoCommand extends Command {
  async run() {
    const {flags} = this.parse(SysDiskIoCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_disk_io.js`)
  }
}

SysDiskIoCommand.description = `Describe the command here
...
Extra documentation goes here
`

SysDiskIoCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysDiskIoCommand
