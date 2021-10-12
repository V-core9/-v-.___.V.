const { Command, flags } = require('@oclif/command')
var isDom = require('is-dom')

class SampleIsDomCommand extends Command {
  async run() {
    const { flags } = this.parse(SampleIsDomCommand)
    const domstring = flags.domstring || null;
    if (domstring !== null) {
      return console.log(isDom(domstring));
    }
    return console.log('SAMPLE : ', isDom(window.document));
    // => true
  }
}

SampleIsDomCommand.description = `Check if the given object is a dom node.
...
Extra documentation goes here
`

SampleIsDomCommand.flags = {
  domstring: flags.string({ char: 'd', description: 'String input value to check' }),
}

module.exports = SampleIsDomCommand
