const {Command, flags} = require('@oclif/command')

class TestSpeedtestNetCommand extends Command {
  async run() {
    const {flags} = this.parse(TestSpeedtestNetCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\test-speedtest.net.js`)

    const speedTest = require('speedtest-net');
    (async () => {
      try {
        console.log(await speedTest({acceptLicense: true}));
      } catch (err) {
        console.log(err.message);
      } finally {
        process.exit(0);
      }
    })();

  }
}

TestSpeedtestNetCommand.description = `The whole speed test runs automatically, but a lot of events are available to get more info than you need.
...
speedtest-net -> https://www.npmjs.com/package/speedtest-net
DefinitelyTyped icon, indicating that this package has TypeScript declarations provided by the separate @types/speedtest-net package
2.2.0 • Public • Published 4 months ago

Installation
npm install --save speedtest-net

Command-Line Tool
$ npm install --global speedtest-net
$ speedtest-net

Repository
->  github.com/ddsol/speedtest.net

Homepage
->  github.com/ddsol/speedtest.net#readme
`

TestSpeedtestNetCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = TestSpeedtestNetCommand
