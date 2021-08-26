const {Command, flags} = require('@oclif/command')
const si = require('systeminformation');

class CpuInfoCommand extends Command {
  async run() {
    const {flags} = this.parse(CpuInfoCommand)
    const name = flags.name || 'world'

    // 
    si.cpu()
      .then(data => console.log(data))
      .catch(error => console.error(error));

  }
}

CpuInfoCommand.description = `Getting and printing CPU info
...
Extra documentation goes here
`

CpuInfoCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = CpuInfoCommand
