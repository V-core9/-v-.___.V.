const {Command, flags} = require('@oclif/command')
const si = require('systeminformation');

class SysDockerAllCommand extends Command {
  async run() {
    const {flags} = this.parse(SysDockerAllCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_docker_all.js`)
  
    // dockerAll
    si.dockerAll()
    .then(data => console.log(data))
    .catch(error => console.error(error));
  
  }
}

SysDockerAllCommand.description = `Docker All Info  
...
list of all containers including their stats
and processes in one single array

REFERENCE FILE :>> https://systeminformation.io/docker.html 
`

SysDockerAllCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysDockerAllCommand
