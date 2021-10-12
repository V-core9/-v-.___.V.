const { Command, flags } = require('@oclif/command')

class SampleWebpagetestCommand extends Command {
  async run() {
    const { flags } = this.parse(SampleWebpagetestCommand)
    const urltotest = flags.urltotest || null
    const WebPageTest = require('webpagetest');
    const wpt = new WebPageTest('www.webpagetest.org');

    wpt.runTest('https://docs.webpagetest.org/api/integrations/', (err, data) => {
      console.log(err || data);
    });
  }
}

SampleWebpagetestCommand.description = `WebPageTest API Wrapper [NO API KEY]
...
WebPageTest API Wrapper is a NPM package that wraps WebPageTest API for NodeJS as a module and a command-line tool.

Ref.URL : https://www.npmjs.com/package/webpagetest

Purchase API_KEY >> https://product.webpagetest.org/api
`

SampleWebpagetestCommand.flags = {
  urltotest: flags.string({ char: 'u', description: 'URL to test' }),
}

module.exports = SampleWebpagetestCommand
