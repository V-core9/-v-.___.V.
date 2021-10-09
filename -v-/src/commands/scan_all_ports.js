const {Command, flags} = require('@oclif/command')
const nodePortScanner = require('node-port-scanner')

// scan all local ports - not recommended on remote hosts
async function checkLocalPorts () {
  
  const allPorts = nodePortScanner('127.0.0.1', []);
  console.log(await allPorts);
  
}

class ScanAllPortsCommand extends Command {
  async run() {
    const {flags} = this.parse(ScanAllPortsCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\scan_all_ports.js`)

    checkLocalPorts();

  }
}

ScanAllPortsCommand.description = `Scans ports to see if they are open or closed.
...
node-port-scanner
3.0.1 • Public • Published 5 months ago

Scans ports to see if they are open or closed.
After calling nodePortScanner, ports are checked in order one after the previous is completed.
Multiple calls can be made and will run in parallel.

npm i node-port-scanner

Repository
github.com/beaudurrant/node-port-scanner

Homepage
github.com/beaudurrant/node-port-scanner
`

ScanAllPortsCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = ScanAllPortsCommand
