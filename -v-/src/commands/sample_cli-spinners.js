const {Command, flags} = require('@oclif/command')

class SampleCliSpinnersCommand extends Command {
  async run() {
    const {flags} = this.parse(SampleCliSpinnersCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sample_cli-spinners.js`)


        const readline = require('readline');
        const logUpdate = require('log-update');
        const cliSpinners = require('cli-spinners');

        const spinners = Object.keys(cliSpinners);
        let frame = 0;
        let spinner = 0;
        let next;
        let scrutator;

        const showNextFrame = () => {
          const {frames} = cliSpinners[spinners[spinner]];
          logUpdate(frames[frame++ % frames.length] + ' ' + spinners[spinner]);
        };

        const showNextSpinner = () => {
          if (next) {
            clearInterval(next);
            spinner++;
          }

          if (spinner < spinners.length) {
            const s = cliSpinners[spinners[spinner]];
            next = setInterval(showNextFrame, s.interval);
            scrutator = setTimeout(showNextSpinner, Math.max(s.interval * s.frames.length, 1000));
          } else {
            // eslint-disable-next-line unicorn/no-process-exit
            process.exit(0);
          }
        };

        readline.emitKeypressEvents(process.stdin);

        process.stdin.setRawMode(true);

        process.stdin.on('keypress', (str, key) => {
          if (key.ctrl && key.name === 'c') {
            // eslint-disable-next-line unicorn/no-process-exit
            process.exit(130);
          }

          if (key.name === 'return') {
            if (scrutator) {
              clearTimeout(scrutator);
              showNextSpinner();
            }
          }
        });

        console.log(spinners.length + ' spinners\n');
        showNextSpinner();

        // $ node example-all.js
        // Press `Enter` to skip to the next spinner
      /*
        const logUpdate = require('log-update');
        const cliSpinners = require('cli-spinners');
        
        const spinner = cliSpinners.dots;
        let i = 0;
        
        setInterval(() => {
          const {frames} = spinner;
          logUpdate(frames[i = ++i % frames.length] + ' Unicorns');
        }, spinner.interval);
        
        // $ node example.js nameOfSpinner
      /*
      {
        interval: 80,
        frames: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
      }
      console.log(cliSpinners.dots);
      console.log(cliSpinners.orangeBluePulse);
      console.log(cliSpinners.dots12);
      console.log(cliSpinners.dots8Bit);
      console.log(cliSpinners.arrow2);
      console.log(cliSpinners.arrow3);
      console.log(cliSpinners.fistBump);
      console.log(cliSpinners.mindblown);
      console.log(cliSpinners.speaker);
      console.log(cliSpinners.timeTravel);
      console.log(cliSpinners.aesthetic);
      */
  }
}

SampleCliSpinnersCommand.description = `Describe the command here
...
Extra documentation goes here
`

SampleCliSpinnersCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SampleCliSpinnersCommand
