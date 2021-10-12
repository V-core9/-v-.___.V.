const { Command, flags } = require('@oclif/command')
const isValidNpmName = require('is-valid-npm-name');
class SampleIsValidNpmNameCommand extends Command {
  async run() {
    const { flags } = this.parse(SampleIsValidNpmNameCommand)
    const name = flags.name || 'fs';
    const nameRes = isValidNpmName(name);

    // `check` is `true` or a String (e.g. why it was not a valid npm name)
    //if (nameRes !== true) {
    //   console.error(nameRes);
    // 'package name cannot use built-in core Node module name'
    //} 
    console.log(nameRes);

  }
}

SampleIsValidNpmNameCommand.description = `Describe the command here
...
Extra documentation goes here
`

SampleIsValidNpmNameCommand.flags = {
  name: flags.string({ char: 'n', description: 'name to print' }),
}

module.exports = SampleIsValidNpmNameCommand
