const {Command, flags} = require('@oclif/command')

class VolumeSetCommand extends Command {
  async run() {
    const {flags} = this.parse(VolumeSetCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\volume_set.js`)
  }
}

VolumeSetCommand.description = `Describe the command here
...
Extra documentation goes here
`

VolumeSetCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = VolumeSetCommand
