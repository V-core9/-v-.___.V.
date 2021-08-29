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

SysInetLatencyCommand.description = `response-time (ms) to external resource
...
Extra documentation goes here

response-time (ms) to external resource 
host parameter is optional (default 8.8.8.8)
`

SysInetLatencyCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysInetLatencyCommand
