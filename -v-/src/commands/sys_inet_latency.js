const {Command, flags} = require('@oclif/command')
const si = require('systeminformation');

class SysInetLatencyCommand extends Command {
  async run() {
    const {flags} = this.parse(SysInetLatencyCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_inet_latency.js`)
    // inetLatency
    si.inetLatency("8.8.4.4") //  <-<=[ AGAIN JUST LINK TO GOOGLE ]
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }
}

SysInetLatencyCommand.description = `Describe the command here
...
Extra documentation goes here
`

SysInetLatencyCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysInetLatencyCommand
