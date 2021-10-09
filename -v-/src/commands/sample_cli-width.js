const {Command, flags} = require('@oclif/command')

class SampleCliWidthCommand extends Command {
  async run() {
    const {flags} = this.parse(SampleCliWidthCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sample_cli-width.js`)

    "use strict";
 
    const cliWidth = require("cli-width");
    
    console.log( cliWidth() ); 
     
  }
}

SampleCliWidthCommand.description = `Get the CLI Window width
...
cli-width
3.0.0 • Public • Published a year ago

npm install --save cli-width

Repository
> github.com/knownasilya/cli-width

Homepage
> github.com/knownasilya/cli-width
`

SampleCliWidthCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SampleCliWidthCommand
