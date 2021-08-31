const {Command, flags} = require('@oclif/command')

class SampleOsMonitorIsRunningCommand extends Command {
  async run() {
    const {flags} = this.parse(SampleOsMonitorIsRunningCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sample_os-monitor-is-running.js`)

    
    const monitor = require("os-monitor");

    
    // check whether monitor is running or not
    monitor.isRunning(); // -> true / false

    console.log(monitor.isRunning());
  }
}

SampleOsMonitorIsRunningCommand.description = `Describe the command here
...
Extra documentation goes here
`

SampleOsMonitorIsRunningCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SampleOsMonitorIsRunningCommand
