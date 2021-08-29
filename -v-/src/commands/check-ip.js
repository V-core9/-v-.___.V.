const {Command, flags} = require('@oclif/command')
var checkIp = require('check-ip');

class CheckIpCommand extends Command {
  
  static args = [
     {
       name: 'testIp',               // name of arg to show in help and reference with args[name]
       required: false,            // make the arg required with `required: true`
       description: 'This is IP we want to check...', // help description
       hidden: false,               // hide this arg from help
       default: '8.8.8.8',           // default value if no arg input
       //options: ['a', 'b'],        // only allow input to be from a discrete set
     }
   ]
  async run() {
    const {flags} = this.parse(CheckIpCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\check-ip_samp.js`)
    // can get args as an object
    const {args} = this.parse(CheckIpCommand)
    console.log(`\nRunning IP_Checkup  command with testIp : ${args.testIp} \n`)

    var ipAddress = args.testIp;
     
    var response = checkIp(ipAddress);
    if (response.isValid && response.isPublicIp) {
      console.log("IP address " + response.boiledIp + " is a valid public IP.");
    }else {
      console.warn("ERROR -> IP Address is Not Valid. Provided IP for Checkup :> " + ipAddress);
    }
    
  }
}

CheckIpCommand.description = `CommonJS module for Node.js to validate IP addresses and return additional information about the IP address
...
check-ip
1.1.1 • Public • Published 4 years ago

A simple module that will take an IP address as input and perform the following:
    ->  Validate the IP address for proper format and number range
    ->  Remove any leading zeros in each octet
    ->  Return a tested ("boiled") IP address
    ->  Indicate if the IP address is part of the bogons list (https://en.wikipedia.org/wiki/Bogon_filtering)
    ->  Indicate if the IP address is part of the multicast IP range (https://en.wikipedia.org/wiki/IP_multicast)
    ->  Indicate if the IP address is an Automatic Private IP Address aka APIPA (http://www.webopedia.com/TERM/A/APIPA.html)
    ->  Indicate if the IP address is an RFC1918 IP address aka private IP address (https://tools.ietf.org/html/rfc1918)
    ->  Indicate if the IP address is a public IP address

npm install check-ip

------------------------------
var checkIp = require('check-ip');
 
checkIp('8.8.8.8');
------------------------------
`

CheckIpCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = CheckIpCommand
