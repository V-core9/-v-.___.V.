const {Command, flags} = require('@oclif/command')
const si = require('systeminformation');

class SysDockerContainerStatsCommand extends Command {
  async run() {
    const {flags} = this.parse(SysDockerContainerStatsCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_docker_container_stats.js`)
  
    // dockerContainerStats
    si.dockerContainerStats()
    .then(data => console.log(data))
    .catch(error => console.error(error));
  
  }
}

SysDockerContainerStatsCommand.description = `Docker Container Stats for specific containers
...
statistics for specific containers
container IDs: space or comma separated,
pass '*' for all containers


REFERENCE FILE :>> https://systeminformation.io/docker.html 
`

SysDockerContainerStatsCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysDockerContainerStatsCommand
