const {Command, flags} = require('@oclif/command')
const si = require('systeminformation');

class SysCpuCurrentSpeedCommand extends Command {
  async run() {
    const {flags} = this.parse(SysCpuCurrentSpeedCommand)
    const name = flags.name || 'world'

    // 
    si.cpuCurrentSpeed()
      .then(data => console.log(data))
      .catch(error => console.error(error));

  }
}

SysCpuCurrentSpeedCommand.description = `Current CPU speed & Per Core stats
...
Extra documentation goes here
`

SysCpuCurrentSpeedCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysCpuCurrentSpeedCommand
