const {Command, flags} = require('@oclif/command')
const si = require('systeminformation');

class SysOpenFilesCommand extends Command {
  async run() {
    const {flags} = this.parse(SysOpenFilesCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_open_files.js`)
    // fsOpenFiles
    si.fsOpenFiles()
    .then(data => console.log(data))
    .catch(error => console.error('ERROR' + error));
  }
}

SysOpenFilesCommand.description = `Describe the command here
...
Extra documentation goes here
`

SysOpenFilesCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysOpenFilesCommand
