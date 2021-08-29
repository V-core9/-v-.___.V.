const {Command, flags} = require('@oclif/command');

class VolumeDemoExampleCommand extends Command {
  async run() {
    const {flags} = this.parse(VolumeDemoExampleCommand);
    const name = flags.name || 'world';
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\volume_demo_example.js`);

    //-<[ Require and Use the constant that we need  ]>-------
    const loudness = require('loudness');
    //-------------------------------------[-v-]----
    
    //-<[ SET Volume to 25%  ]>-------
    await loudness.setVolume(25);
    //-----------------------[-v-]----
    
    //-<[ GET current volume value ]>-------
    const vol = await loudness.getVolume();
    // vol = 25
    console.log("Currnet Volume: " + vol );
    //----------------------------[-v-]----
    
    //-<[ SET Mute Status => TRUE  ]>-------
    await loudness.setMuted(true)
    //----------------------------[-v-]----
    
    //-<[ SET Mute Status => FALSE  ]>-------
    await loudness.setMuted(false)
    //----------------------------[-v-]----
    
    //-<[ GET Mute Status ]>-----------------------
    const mute = await loudness.getMuted();
    // mute = false
    console.log("Currnet Mute Status: " + mute );
    //-------------------------------------[-v-]----
  }
}

VolumeDemoExampleCommand.description = `A node.js library to control the systems output volume
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

VolumeDemoExampleCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = VolumeDemoExampleCommand
