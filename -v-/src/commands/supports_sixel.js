const {Command, flags} = require('@oclif/command')

class SupportsSixelCommand extends Command {
  async run() {
    const {flags} = this.parse(SupportsSixelCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\supports_sixel.js`)

    const supportsSixel = require("supports-sixel");
 
    (async () => {
        const isSupported = await supportsSixel();
    
        console.log(isSupported ? "Sixels are supported!" : "Sixels aren't supported!");
    })();


  }
}

SupportsSixelCommand.description = `Detect whether a terminal can display sixels.
...
supports-sixel -> https://www.npmjs.com/package/supports-sixel
TypeScript icon, indicating that this package has built-in type declarations
1.0.0 • Public • Published a year ago

npm install supports-sixel

Repository
-> github.com/Richienb/supports-sixel

Homepage
-> github.com/Richienb/supports-sixel#readme

API
supportsSixel()
Returns a promise that resolves with a boolean.

`

SupportsSixelCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SupportsSixelCommand
