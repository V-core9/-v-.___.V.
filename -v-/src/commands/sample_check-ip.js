const { Command, flags } = require('@oclif/command')
var checkIp = require('check-ip');

class SampleCheckIpCommand extends Command {

  async run() {
    const { flags } = this.parse(SampleCheckIpCommand)
    const ipAddress = flags.ip || '8.8.8.8'

    console.log(`\nRunning IP_Checkup with testIp : ${ipAddress} \n`)


    var response = checkIp(ipAddress);
    if (response.isValid && response.isPublicIp) {
      console.log("IP address " + response.boiledIp + " is a valid public IP.");
    } else {
      console.warn("ERROR -> IP Address is Not Valid. Provided IP for Checkup :> " + ipAddress);
    }

  }
}

SampleCheckIpCommand.description = `CommonJS module for Node.js to validate IP addresses and return additional information about the IP address
...
check-ip  ->  https://github.com/johnnymastin/check-ip   ++  https://www.npmjs.com/package/check-ip
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

Repository
-> github.com/johnnymastin/check-ip

Homepage
-> github.com/johnnymastin/check-ip
`

SampleCheckIpCommand.flags = {
  ip: flags.string({ char: 'i', description: 'IP address to test' }),
}

module.exports = SampleCheckIpCommand
