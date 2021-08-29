const {Command, flags} = require('@oclif/command')
const si = require('systeminformation');

class SysDockerInfoCommand extends Command {
  async run() {
    const {flags} = this.parse(SysDockerInfoCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_docker_info.js`)
    // dockerInfo
    si.dockerInfo()
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }
}

SysDockerInfoCommand.description = `Returns general Docker Info
...
REFERENCE FILE :>> https://systeminformation.io/docker.html 

` 

SysDockerInfoCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysDockerInfoCommand
