const {Command, flags} = require('@oclif/command')

class TestGloballyInstalledCommand extends Command {
  async run() {
    const {flags} = this.parse(TestGloballyInstalledCommand)
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

TestGloballyInstalledCommand.description = `Describe the command here
...
Extra documentation goes here
`

TestGloballyInstalledCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = TestGloballyInstalledCommand
