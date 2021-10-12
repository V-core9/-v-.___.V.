const { Command, flags } = require('@oclif/command')
const isLocalhostUrl = require('is-localhost-url')

class SampleIsLocalhostUrlCommand extends Command {
  async run() {
    const { flags } = this.parse(SampleIsLocalhostUrlCommand)
    const urlToTest = flags.url || null;

    if (urlToTest === null) {
      console.log("Demo : ")
      console.log("Check [ http://localhost:3000 ] : ", isLocalhostUrl("http://localhost:3000"));
      console.log("Check [ http://example.com ] : ", isLocalhostUrl("http://example.com"));
    } else {
      var resVal = isLocalhostUrl(urlToTest);
      console.log(resVal);
      return resVal;
    }
  }
}

SampleIsLocalhostUrlCommand.description = `Describe the command here
...
Extra documentation goes here
`

SampleIsLocalhostUrlCommand.flags = {
  url: flags.string({ char: 'u', description: 'URL to check if is localhost' }),
}

module.exports = SampleIsLocalhostUrlCommand
