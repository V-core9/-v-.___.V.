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

TestPublicIpCommand.description = `Get your public IP address - very fast!
...
public-ip -> https://www.npmjs.com/package/public-ip
TypeScript icon, indicating that this package has built-in type declarations
4.0.4 • Public • Published 3 months ago

npm install public-ip

==================
const publicIp = require('public-ip');

(async () => {
	console.log(await publicIp.v4());
	//=> '46.5.21.123'

	console.log(await publicIp.v6());
	//=> 'fe80::200:f8ff:fe21:67cf'
})();
===================
<| OR MAYBE |>
===================
const publicIp = require('public-ip');

(async () => {
	await publicIp.v6({
		fallbackUrls: [
			'https://ifconfig.co/ip'
		]
	});
})();
====================

Repository
->  github.com/sindresorhus/public-ip

Homepage
->  github.com/sindresorhus/public-ip#readme
`

TestPublicIpCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = TestPublicIpCommand
