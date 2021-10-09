const {Command, flags} = require('@oclif/command')
const si = require('systeminformation');

class InfoMemCommand extends Command {
  async run() {
    const {flags} = this.parse(InfoMemCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\🢔⟬⩹⧋⛛⌬⛛⧋⩺⟭🢖\\src\\commands\\mem-info.js`)

    // mem
    si.mem()
    .then(data => console.log(data))
    .catch(error => console.error(error));
    
  }
}

InfoMemCommand.description = `RAM Info printing
...
Extra documentation goes here
`

InfoMemCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = InfoMemCommand
