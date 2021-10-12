const { Command, flags } = require('@oclif/command')
const psi = require('psi');

class SamplePsiCommand extends Command {
  async run() {
    const { flags } = this.parse(SamplePsiCommand)
    const urltotest = flags.urltotest || 'https://theverge.com'

    // Get the PageSpeed Insights report
    //const { data } = await psi(urltotest);
    //console.log('Speed score:', data.lighthouseResult.categories.performance.score);

    // Output a formatted report to the terminal
    await psi.output(urltotest);
    //console.log('Done');

    // Supply options to PSI and get back speed
    //const data2 = await psi(urltotest, {
    //   nokey: 'true',
    //  strategy: 'desktop'
    //});
    //console.log('Speed score:', data2.data.lighthouseResult.categories.performance.score);

  }
}

SamplePsiCommand.description = `Describe the command here
...
Extra documentation goes here
`

SamplePsiCommand.flags = {
  urltotest: flags.string({ char: 'u', description: 'URL to test with PSI' }),
}

module.exports = SamplePsiCommand
