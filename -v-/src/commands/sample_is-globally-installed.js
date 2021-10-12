const { Command, flags } = require('@oclif/command')

class SampleIsGloballyInstalledCommand extends Command {
  async run() {
    const { flags } = this.parse(SampleIsGloballyInstalledCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\test_Globally-installed.js`)


    const isInstalledGlobally = require('is-installed-globally');

    // With `npm install your-package`
    console.log(isInstalledGlobally);
    //=> false

    // With `npm install --global your-package`
    console.log(isInstalledGlobally);
    //=> true
  }
}

SampleIsGloballyInstalledCommand.description = `Describe the command here
...
Extra documentation goes here
`

SampleIsGloballyInstalledCommand.flags = {
  name: flags.string({ char: 'n', description: 'name to print' }),
}

module.exports = SampleIsGloballyInstalledCommand
