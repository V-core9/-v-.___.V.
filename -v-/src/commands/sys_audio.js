const {Command, flags} = require('@oclif/command')

class SysAudioCommand extends Command {
  async run() {
    const {flags} = this.parse(SysAudioCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_audio.js`)
  }
}

SysAudioCommand.description = `Describe the command here
...
Extra documentation goes here
`

SysAudioCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysAudioCommand
