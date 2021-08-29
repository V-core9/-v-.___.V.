const {Command, flags} = require('@oclif/command')
const si = require('systeminformation');

class SysDockerContainersCommand extends Command {
  async run() {
    const {flags} = this.parse(SysDockerContainersCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_docker_containers.js`)
  
    // dockerContainers
    si.dockerContainers()
    .then(data => console.log(data))
    .catch(error => console.error(error));
  
  }
}

SysDockerContainersCommand.description = `Will get you an array of active/all docker containers
...
REFERENCE FILE :>> https://systeminformation.io/docker.html 
`

SysDockerContainersCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysDockerContainersCommand
