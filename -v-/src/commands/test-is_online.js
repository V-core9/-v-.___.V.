const {Command, flags} = require('@oclif/command')

class IsOnlineCommand extends Command {
  async run() {
    const {flags} = this.parse(IsOnlineCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\is_online.js`)

    const isOnline = require('is-online');

    (async () => {
      console.log(await isOnline());
      //=> true
    })();

  }
}

IsOnlineCommand.description = `Describe the command here
...
Extra documentation goes here
`

IsOnlineCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = IsOnlineCommand
