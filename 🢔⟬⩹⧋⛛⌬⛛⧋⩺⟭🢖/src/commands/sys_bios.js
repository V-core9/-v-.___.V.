const {Command, flags} = require('@oclif/command')
const si = require('systeminformation');

class SysBiosCommand extends Command {
  async run() {
    const {flags} = this.parse(SysBiosCommand)
    const name = flags.name || 'world'

    // 
    si.bios()
      .then(data => console.log(data))
      .catch(error => console.error(error));

  }
}

SysBiosCommand.description = `Prints BIOS information
...
Extra documentation goes here
`

SysBiosCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysBiosCommand
