const {Command, flags} = require('@oclif/command')

class SampleCliProgressCommand extends Command {
  async run() {
    const {flags} = this.parse(SampleCliProgressCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sample_cli-progress.js`)

      const _progress = require('cli-progress');

        const files = {
            'eta.js        ': 187,
            'generic-bar.js': 589,
            'multi-bar.js  ': 5342,
            'options.js    ': 42,
            'single-bar.js ': 2123,
            'terminal.js   ': 4123
        };
        const bars = [];

        // create new container
        const multibar = new _progress.MultiBar({
            format: ' {bar} | "{file}" | {value}/{total}',
            hideCursor: true,
            barCompleteChar: '\u2588',
            barIncompleteChar: '\u2591',
            clearOnComplete: true,
            stopOnComplete: true
        });

        console.log("Downloading files..\n");

        // add bars
        for (const filename in files){
            const size = files[filename];

            bars.push(multibar.create(size, 0, {file: filename}));
        }

        const timer = setInterval(function(){

            // increment
            for (let i=0; i<bars.length;i++){
                const bar = bars[i];

                // download complete ?
                if (bar.value < bar.total){
                    bar.increment();
                }
            }

            // progress bar running ?
            // check "isActive" property in case you've enabled "stopOnComplete" !
            if (multibar.isActive === false){
                clearInterval(timer);

                //multibar.stop();
                console.log('Download complete!')
            }
        }, 3);

  }
}

SampleCliProgressCommand.description = `easy to use progress-bar for command-line/terminal applications
...
cli-progress -> https://www.npmjs.com/package/cli-progress

Features
|->  Simple, Robust and Easy to use
|->  Full customizable output format (constious placeholders are available)
|->  Single progressbar mode
|->  Multi progessbar mode
|->  Custom Bar Characters
|->  FPS limiter
|->  ETA calculation based on elapsed time
|->  Custom Tokens to display additional data (payload) within the bar
|->  TTY and NOTTY mode
|->  No callbacks required - designed as pure, external controlled UI widget
|->  Works in Asynchronous and Synchronous tasks
|->  Preset/Theme support
|->  Custom bar formatters (via callback)


Repository
-> github.com/AndiDittrich/Node.CLI-Progress

Homepage
-> github.com/AndiDittrich/Node.CLI-Progress
`

SampleCliProgressCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SampleCliProgressCommand
