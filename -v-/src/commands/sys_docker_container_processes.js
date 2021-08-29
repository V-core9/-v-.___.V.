const {Command, flags} = require('@oclif/command')
const si = require('systeminformation');

class SysDockerContainerProcessesCommand extends Command {
  async run() {
    const {flags} = this.parse(SysDockerContainerProcessesCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_docker_container_processes.js`)
  
    // dockerContainerProcesses
    si.dockerContainerProcesses()
    .then(data => console.log(data))
    .catch(error => console.error(error));
  
  }
}

SysDockerContainerProcessesCommand.description = `Returns an array of processes inside a container
...
REFERENCE FILE :>> https://systeminformation.io/docker.html 
`

SysDockerContainerProcessesCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysDockerContainerProcessesCommand
