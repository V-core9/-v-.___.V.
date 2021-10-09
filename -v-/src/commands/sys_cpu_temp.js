const {Command, flags} = require('@oclif/command')
const si = require('systeminformation')

class SysCpuTempCommand extends Command {
  async run() {
    const {flags} = this.parse(SysCpuTempCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\🢔⟬⩹⧋⛛⌬⛛⧋⩺⟭🢖\\src\\commands\\sys_cpu_temp.js`)
    // 
    si.cpuTemperature()
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }
}

SysCpuTempCommand.description = `CPU Temperature Check
...
Extra documentation goes here
`

SysCpuTempCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysCpuTempCommand
