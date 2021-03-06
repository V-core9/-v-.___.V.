/*jshint esversion: 8 */

const {Command, flags} = require('@oclif/command')

class VolumeUnmuteCommand extends Command {
  async run() {
    const {flags} = this.parse(VolumeUnmuteCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\volume_unmute.js`)

    //-<[ Require and Use the constant that we need  ]>-------
    const loudness = require('loudness');
    //-------------------------------------[-v-]----
    
    //-<[ SET Mute Status => FALSE  ]>-------
    await loudness.setMuted(false)
    //----------------------------[-v-]----

  }
}

VolumeUnmuteCommand.description = `Unmute device command - Sound ON
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

VolumeUnmuteCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = VolumeUnmuteCommand
