const { Command, flags } = require('@oclif/command')

class SampleIsCmdCommand extends Command {
  async run() {
    const { flags } = this.parse(SampleIsCmdCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\test-is_cmd.js`)

    const isCmd = require("is-cmd");

    var cmdStatus = isCmd();

    console.log(cmdStatus);

  }
}

SampleIsCmdCommand.description = `Check if the current environment is the Windows Command Prompt
...
Extra documentation goes here
`

SampleIsCmdCommand.flags = {
  name: flags.string({ char: 'n', description: 'name to print' }),
}

module.exports = SampleIsCmdCommand
