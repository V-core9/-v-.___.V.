const {Command, flags} = require('@oclif/command')
const si = require('systeminformation');

class SysBatteryCommand extends Command {
  async run() {
    const {flags} = this.parse(SysBatteryCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_battery.js`)
    // battery
    si.battery()
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }
}

SysBatteryCommand.description = `Describe the command here
...
Extra documentation goes here
`

SysBatteryCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysBatteryCommand
