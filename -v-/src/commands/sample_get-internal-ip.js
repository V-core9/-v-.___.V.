const { Command, flags } = require('@oclif/command')
const internalIp = require('internal-ip');

class SampleGetInternalIpCommand extends Command {
  async run() {
    const { flags } = this.parse(SampleGetInternalIpCommand)
    const ver = flags.version || 'both'

    if ((ver === 6) || (ver == 'both')) {
      var v6 = internalIp.v6.sync();
      console.log(`V6 :: ${v6}`);
      //=> 'fe80::1'
    };

    if ((ver === 4) || (ver == 'both')) {
      var v4 = internalIp.v4.sync()
      console.log(`V4 :: ${v4}`);
      //=> '10.0.0.79'
    };

  }
}

SampleGetInternalIpCommand.description = `Get your internal IP address
...
internal-ip
TypeScript icon, indicating that this package has built-in type declarations
6.2.0 • Public • Published 9 months ago

npm install internal-ip

Repository
github.com/sindresorhus/internal-ip

Homepage
github.com/sindresorhus/internal-ip#read


`

SampleGetInternalIpCommand.flags = {
  version: flags.string({ char: 'v', description: 'IP Version to test' }),
}

module.exports = SampleGetInternalIpCommand
