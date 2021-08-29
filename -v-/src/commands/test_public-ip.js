const {Command, flags} = require('@oclif/command')

class TestPublicIpCommand extends Command {
  async run() {
    const {flags} = this.parse(TestPublicIpCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\test_public-ip.js`)

    const publicIp = require('public-ip');

    (async () => {
      console.log(await publicIp.v4());
      //=> '46.5.21.123'
    
      //console.log(await publicIp.v6());
      //=> 'fe80::200:f8ff:fe21:67cf'
    })();

  }
}

TestPublicIpCommand.description = `Describe the command here
...
Extra documentation goes here
`

TestPublicIpCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = TestPublicIpCommand
