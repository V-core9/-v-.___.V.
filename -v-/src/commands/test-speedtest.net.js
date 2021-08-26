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

TestSpeedtestNetCommand.description = `Describe the command here
...
Extra documentation goes here
`

TestSpeedtestNetCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = TestSpeedtestNetCommand
