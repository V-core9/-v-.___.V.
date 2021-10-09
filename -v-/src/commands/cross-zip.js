const {Command, flags} = require('@oclif/command')
let path = require('path')

class CrossZipCommand extends Command {
  async run() {
    const {flags} = this.parse(CrossZipCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\cross-zip.js`)

    var zip = require('cross-zip')
 
    var inPath = path.join(__dirname, 'myFolder') // folder to zip
    var outPath = path.join(__dirname, 'myFile.zip') // name of output zip file
    
    zip.zipSync(inPath, outPath)


  }
}

CrossZipCommand.description = `Cross-platform .zip file creation
...
cross-zip -> https://www.npmjs.com/package/cross-zip
DefinitelyTyped icon, indicating that this package has TypeScript declarations provided by the separate @types/cross-zip package
4.0.0 • Public • Published 10 months ago

npm install cross-zip

Repository
-> github.com/feross/cross-zip

Homepage
-> github.com/feross/cross-zip

`

CrossZipCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = CrossZipCommand
