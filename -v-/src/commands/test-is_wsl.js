const {Command, flags} = require('@oclif/command')

class TestIsWslCommand extends Command {
  async run() {
    const {flags} = this.parse(TestIsWslCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\test-is_wsl.js`)

    const isWsl = require('is-wsl');
 
    // When running inside Windows Subsystem for Linux
    console.log(isWsl);
    //=> true

  }
}

TestIsWslCommand.description = `Check if the process is running inside Windows Subsystem for Linux (Bash on Windows)
...
is-wsl -> https://www.npmjs.com/package/is-wsl
TypeScript icon, indicating that this package has built-in type declarations
2.2.0 • Public • Published a year ago

npm install is-wsl

Repository
-> github.com/sindresorhus/is-wsl

Homepage
-> github.com/sindresorhus/is-wsl#readme

Can be useful if you need to work around unimplemented or buggy features in WSL. Supports both WSL 1 and WSL 2.
`

TestIsWslCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = TestIsWslCommand
