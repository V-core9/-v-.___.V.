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

SampleOsMonitorIsRunningCommand.description = `A very simple monitor for the built-in os module in Node.js.
...
Allows you to observe some OS parameters, such as free memory available or load average.

os-monitor => https://www.npmjs.com/package/os-monitor
1.2.2 • Public • Published 10 days ago

Repository
> github.com/lfortin/node-os-monitor

Homepage
> github.com/lfortin/node-os-monitor#readme

npm install os-monitor

`

SampleOsMonitorIsRunningCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SampleOsMonitorIsRunningCommand
