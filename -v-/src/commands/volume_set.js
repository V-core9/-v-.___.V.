/*jshint esversion: 8 */

const {Command, flags} = require('@oclif/command')

class VolumeSetCommand extends Command {
  
 static args = [
    {
      name: 'volLevel',               // name of arg to show in help and reference with args[name]
      required: false,            // make the arg required with `required: true`
      description: 'This is basically how it gets new value sent by using the args option.', // help description
      hidden: false,               // hide this arg from help
      default: 20,           // default value if no arg input
      //options: ['a', 'b'],        // only allow input to be from a discrete set
    }
  ]

  async run() {
    const {flags} = this.parse(VolumeSetCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\volume_set.js`)

    
    // can get args as an object
    const {args} = this.parse(VolumeSetCommand)
    console.log(`running my command with args: ${args.volLevel}`)
    // can also get the args as an array
    const {argv} = this.parse(VolumeSetCommand)
    console.log(`running my command with args: ${argv[0]}`)


  }
}

VolumeSetCommand.description = `Command that will set the OS Volume Level to [value-provided]
...
loudness  ->  https://www.npmjs.com/package/loudness
TypeScript icon, indicating that this package has built-in type declarations
0.4.1 • Public • Published a year ago

node-loudness
A node.js library to control the systems output volume

Usage
The library currently has support for four simple async functions. The volume is specified as an integer between 0 and 100 (inc.).

OS Support
Currently macOS, Windows (>= Vista) and Linux (ALSA) is supported, please send a pull request if you are using another setup.

Repository
->  github.com/LinusU/node-loudness

Homepage
->  github.com/LinusU/node-loudness#readm
`

VolumeSetCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}


module.exports = VolumeSetCommand
