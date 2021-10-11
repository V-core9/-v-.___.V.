const {Command, flags} = require('@oclif/command')
const open = require('open');
const path = require('path');

class SampleFireworksBrowserCommand extends Command {
  async run() {
    // Opens the URL in the default browser.
    await open( path.join(__dirname,'../helpers/sample_fireworks/demo.html'));
  }
}

SampleFireworksBrowserCommand.description = `YEAAHH 100 Commands DONE...lets see some fireworks 🎆
...
I know it might be bad example cuz it's using just <open> module but....here is 
a link to it for more details : https://www.npmjs.com/package/fireworks-js 
                              
YEAAA FIREWORKS PEW PEW HAHAHA 🤘🥳🤘
`

SampleFireworksBrowserCommand.flags = {
  
}

module.exports = SampleFireworksBrowserCommand
