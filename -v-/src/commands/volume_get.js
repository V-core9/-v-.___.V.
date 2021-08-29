const {Command, flags} = require('@oclif/command')

class VolumeGetCommand extends Command {
  async run() {
    const {flags} = this.parse(VolumeGetCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\volume_get.js`)
  }
}

VolumeGetCommand.description = `Describe the command here
...
Extra documentation goes here
`

VolumeGetCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = VolumeGetCommand
