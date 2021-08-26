const {Command, flags} = require('@oclif/command')
const si = require('systeminformation');

class InfoOsCommand extends Command {
  async run() {
    const {flags} = this.parse(InfoOsCommand)
    const name = flags.name || 'world'
    
    // OS
    si.osInfo()
    .then(data => console.log(data))
    .catch(error => console.error(error));

  }
}

InfoOsCommand.description = `Finding and printing Operating System Info
...
Extra documentation goes here
`

InfoOsCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = InfoOsCommand
