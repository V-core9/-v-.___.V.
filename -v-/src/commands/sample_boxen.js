const {Command, flags} = require('@oclif/command')

class SampleCliBoxesCommand extends Command {
  async run() {
    const {flags} = this.parse(SampleCliBoxesCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sample_cli-boxes.js`)

      const boxen = require('boxen');

      console.log(boxen('Wooow.... I am making some weird stuff here.', {padding: 0}));

      console.log(boxen('Unicorn - Nicely Done! ', {padding: 1, margin: 1, borderStyle: 'double'}));  

  }
}

SampleCliBoxesCommand.description = `Describe the command here
...
Extra documentation goes here
`

SampleCliBoxesCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SampleCliBoxesCommand
