const {Command, flags} = require('@oclif/command')

class TestInternalIpCommand extends Command {
  async run() {
    const {flags} = this.parse(TestInternalIpCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\test_internal-ip.js`)
  
    const internalIp = require('internal-ip');
 
    (async () => {
        console.log(await internalIp.v6());
        //=> 'fe80::1'
    
        console.log(await internalIp.v4());
        //=> '10.0.0.79'
    })();
    
    console.log(internalIp.v6.sync())
    //=> 'fe80::1'
    
    console.log(internalIp.v4.sync())
    //=> '10.0.0.79'
  
  }
}

TestInternalIpCommand.description = `Get your internal IP address
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

TestInternalIpCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = TestInternalIpCommand
