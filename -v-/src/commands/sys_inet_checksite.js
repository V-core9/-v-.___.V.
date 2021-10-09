const {Command, flags} = require('@oclif/command')
const si = require('systeminformation');

class SysInetchecksiteCommand extends Command {
  async run() {
    const {flags} = this.parse(SysInetchecksiteCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_inetchecksite.js`)
    // inetChecksite
    si.inetChecksite("https://google.com")
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }
}

SysInetchecksiteCommand.description = `response-time (ms) to fetch given URL
...
Extra documentation goes here
`

SysInetchecksiteCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysInetchecksiteCommand
