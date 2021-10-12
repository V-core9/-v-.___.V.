const { Command, flags } = require('@oclif/command')
const canUseDOM = require('can-use-dom')

class SampleCanUseDomCommand extends Command {
  async run() {
    const { flags } = this.parse(SampleCanUseDomCommand)
    console.log(canUseDOM);
  }
}

SampleCanUseDomCommand.description = `should return true in browser
...
Ref.URL : https://www.npmjs.com/package/can-use-dom
`

module.exports = SampleCanUseDomCommand
