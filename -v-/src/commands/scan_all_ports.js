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

ScanAllPortsCommand.description = `Describe the command here
...
Extra documentation goes here
`

ScanAllPortsCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = ScanAllPortsCommand
