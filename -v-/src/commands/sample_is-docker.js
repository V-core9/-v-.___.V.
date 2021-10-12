const {Command, flags} = require('@oclif/command')

class SampleIsDockerCommand extends Command {
  async run() {
    const { flags } = this.parse(SampleIsDockerCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\test_is-docker.js`)

    const isDocker = require('is-docker');

    if (isDocker()) {
      console.log('Running inside a Docker container');
    }

  }
}

SampleIsDockerCommand.description = `Check if the process is running inside a Docker container
...
is-docker ->  https://www.npmjs.com/package/is-docker
TypeScript icon, indicating that this package has built-in type declarations
2.2.1 • Public • Published 5 months ago

npm install is-docker

Repository
-> github.com/sindresorhus/is-docker

Homepage
-> github.com/sindresorhus/is-docker#readme

Exits with code 0 if inside a Docker container and 2 if not.

`

SampleIsDockerCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SampleIsDockerCommand
