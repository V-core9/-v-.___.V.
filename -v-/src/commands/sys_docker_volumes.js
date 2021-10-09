const {Command, flags} = require('@oclif/command')
const si = require('systeminformation');

class SysDockerVolumesCommand extends Command {
  async run() {
    const {flags} = this.parse(SysDockerVolumesCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_docker_volumes.js`)
  
    // dockerVolumes
    si.dockerVolumes()
    .then(data => console.log(data))
    .catch(error => console.error(error));
  
  }
}

SysDockerVolumesCommand.description = `Calling it returns array of docker volumes
...
REFERENCE FILE :>> https://systeminformation.io/docker.html 
`

SysDockerVolumesCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysDockerVolumesCommand
