const {Command, flags} = require('@oclif/command')

class WindowsVulnerabilitiesCommand extends Command {
  async run() {
    const {flags} = this.parse(WindowsVulnerabilitiesCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\windows-vulnerabilities.js`)

    const winVlnr = require('windows-vulnerabilities');
 
    // Get os version and number of known security vulnerabilities
    winVlnr();
    //=> '['1607', "842"]'

  }
}

WindowsVulnerabilitiesCommand.description = `Describe the command here
...
Extra documentation goes here
`

WindowsVulnerabilitiesCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = WindowsVulnerabilitiesCommand
