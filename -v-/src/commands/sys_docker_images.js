const {Command, flags} = require('@oclif/command')
const si = require('systeminformation');

class SysDockerImagesCommand extends Command {
  async run() {
    const {flags} = this.parse(SysDockerImagesCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sys_docker_images.js`)
  
    // dockerImages
    si.dockerImages()
    .then(data => console.log(data))
    .catch(error => console.error(error));
  
  }
}

SysDockerImagesCommand.description = `Provides array of top level/all docker images
...
REFERENCE FILE :>> https://systeminformation.io/docker.html 
`

SysDockerImagesCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SysDockerImagesCommand
