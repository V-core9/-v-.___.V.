const {Command, flags} = require('@oclif/command')

class SampleHelloCommand extends Command {
  async run() {
    const { flags } = this.parse(SampleHelloCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from .\\src\\commands\\hello.js`)
  }
}

SampleHelloCommand.description = `HELLO & WELCOME
...
Extra documentation goes here 
Yup we are quite short with it...haha
`

SampleHelloCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SampleHelloCommand
