const {Command, flags} = require('@oclif/command')

class TestIsCmdCommand extends Command {
  async run() {
    const {flags} = this.parse(TestIsCmdCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\test-is_cmd.js`)

    const isCmd = require("is-cmd");
 
    var cmdStatus = isCmd();

    console.log(cmdStatus);

  }
}

TestIsCmdCommand.description = `Check if the current environment is the Windows Command Prompt
...
Extra documentation goes here
`

TestIsCmdCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = TestIsCmdCommand
