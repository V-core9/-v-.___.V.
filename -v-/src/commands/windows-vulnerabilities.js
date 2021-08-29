/*jshint esversion: 8 */

const {Command, flags} = require('@oclif/command')

class WindowsVulnerabilitiesCommand extends Command {
  async run() {
    const {flags} = this.parse(WindowsVulnerabilitiesCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\windows-vulnerabilities.js`)

    const winVlnr = require('windows-vulnerabilities');
 
    // Get os version and number of known security vulnerabilities
    console.log( winVlnr() );
    //=> '['1607', "842"]'

  }
}

WindowsVulnerabilitiesCommand.description = `Get the number of known security vulnerabilities for your current windows 10 version
...
windows-vulnerabilities -> https://www.npmjs.com/package/windows-vulnerabilities
0.0.22 • Public • Published a year ago

Get os version and number of known security vulnerabilities. Array or -1 if os build not in database.

npm install windows-vulnerabilities

--------------------------------------------------
const winVlnr = require('windows-vulnerabilities');
 
// Get os version and number of known security vulnerabilities
winVlnr();
//=> '['1607', "842"]'
-------------------------------------------------

Repository
-> github.com/lukapetrovic/windows-vulnerabilities

Homepage
-> github.com/lukapetrovic/windows-vulnerabilities

`

WindowsVulnerabilitiesCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = WindowsVulnerabilitiesCommand
