const {Command, flags} = require('@oclif/command')

class SampleOsMonitorStopCommand extends Command {
  async run() {
    const {flags} = this.parse(SampleOsMonitorStopCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sample_os-monitor-stop.js`)
    
    const monitor = require("os-monitor");
    
    // stop monitor
    monitor.stop();
  }
}

SampleOsMonitorStopCommand.description = `Describe the command here
...
Extra documentation goes here
`

SampleOsMonitorStopCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SampleOsMonitorStopCommand
