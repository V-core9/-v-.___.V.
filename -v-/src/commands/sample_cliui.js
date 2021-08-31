const {Command, flags} = require('@oclif/command')

class SampleCliuiCommand extends Command {
  async run() {
    const {flags} = this.parse(SampleCliuiCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sample_cliui.js`)
    
    const ui = require('cliui')()
    const chalk = require('chalk');
 
    ui.div('Usage: $0 [command] [options]')
    
    ui.div({
      text: 'Options:',
      padding: [2, 0, 1, 0]
    })
    
    ui.div(
      {
        text: "-f, --file",
        width: 20,
        padding: [0, 4, 0, 4]
      },
      {
        text: "the file to load." +
          chalk.green("(if this description is long it wraps).")
        ,
        width: 20
      },
      {
        text: chalk.red("[required]"),
        align: 'right'
      }
    )
    
    console.log(ui.toString())
  }
}

SampleCliuiCommand.description = `Describe the command here
...
Extra documentation goes here
`

SampleCliuiCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SampleCliuiCommand
