const { Command, flags } = require('@oclif/command')
const isDocker = require('is-docker');

class SampleIsDockerCommand extends Command {
  async run() {
    console.log('Is Running inside a Docker container ??');
    console.log(isDocker());
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


module.exports = SampleIsDockerCommand
