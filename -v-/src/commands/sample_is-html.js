const { Command, flags } = require('@oclif/command')
const isHtml = require('is-html');

class SampleIsHtmlCommand extends Command {
  async run() {
    const { flags } = this.parse(SampleIsHtmlCommand)
    const input = flags.input || `<p>I am HTML</p>`


    console.log(isHtml(input));
    //=> true || false
  }
}

SampleIsHtmlCommand.description = `Check if a string is HTML
...
Ref.URL : https://www.npmjs.com/package/is-html/v/2.0.0
`

SampleIsHtmlCommand.flags = {
  input: flags.string({ char: 'i', description: 'Input string you want to check' }),
}

module.exports = SampleIsHtmlCommand
