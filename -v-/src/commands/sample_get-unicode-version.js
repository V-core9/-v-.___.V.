const { Command, flags } = require('@oclif/command')

class SampleTestUnicodeVersionCommand extends Command {
  async run() {
    const { flags } = this.parse(SampleTestUnicodeVersionCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\test-unicode_support.js`)

    const unicodeVersion = require('unicode-version');

    console.log(unicodeVersion);

  }
}

SampleTestUnicodeVersionCommand.description = `Check the unicode version in your code
...
unicode-version -> https://www.npmjs.com/package/unicode-version
1.0.2 • Public • Published 3 years ago

npm install unicode-version

Usage
----------------------------------------------
const unicodeVersion = require('unicode-version');
console.log(unicodeVersion);
----------------------------------------------

$ npm start
#=> 11.0 


Repository
->  github.com/MrDatastorage/unicode-version

Homepage
->  github.com/MrDatastorage/unicode-version

`

SampleTestUnicodeVersionCommand.flags = {
  name: flags.string({ char: 'n', description: 'name to print' }),
}

module.exports = SampleTestUnicodeVersionCommand
