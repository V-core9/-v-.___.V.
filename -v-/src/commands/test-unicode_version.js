const {Command, flags} = require('@oclif/command')

class TestUnicodeVersionCommand extends Command {
  async run() {
    const {flags} = this.parse(TestUnicodeVersionCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\test-unicode_support.js`)
    
    const unicodeVersion = require('unicode-version');
 
    console.log(unicodeVersion);

  }
}

TestUnicodeVersionCommand.description = `Test that returns Unicode Version number
...
Extra documentation goes here
`

TestUnicodeVersionCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = TestUnicodeVersionCommand
