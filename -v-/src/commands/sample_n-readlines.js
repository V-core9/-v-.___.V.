const {Command, flags} = require('@oclif/command')

class SampleNReadlinesCommand extends Command {
  async run() {
    const {flags} = this.parse(SampleNReadlinesCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sample_n-readlines.js`)

    const lineByLine = require('n-readlines');
    const liner = new lineByLine('resources/demo.txt');
    
    let line;
    let lineNumber = 0;
    
    while (line = liner.next()) {
        console.log('Line ' + lineNumber + ': ' + line.toString('ascii'));
        lineNumber++;
    }
    
    console.log('end of line reached');



  }
}

SampleNReadlinesCommand.description = `Describe the command here
...
n-readlines -> https://www.npmjs.com/package/n-readlines
1.0.1 • Public • Published 10 months ago

Reading file line by line may seem like a trivial problem, but in node, there is no straightforward way to do it. There are a lot of libraries using Transform Streams to achieve it, but it seems like a overkill, so I've wrote simple version using only the filesystem module of node. Note that this is synchronous library.

npm install n-readlines --save

Repository
> github.com/nacholibre/node-readlines

Homepage
> github.com/nacholibre/node-readlines#readme
`

SampleNReadlinesCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SampleNReadlinesCommand
