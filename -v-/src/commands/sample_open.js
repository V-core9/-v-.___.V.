const {Command, flags} = require('@oclif/command')

class SampleOpenCommand extends Command {
  async run() {
    const {flags} = this.parse(SampleOpenCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sample_open.js`)
    const open = require('open');

    // Opens the image in the default image viewer and waits for the opened app to quit.
    await open('resources/imgs/demo.jpg', {wait: true});
    console.log('The image viewer app quit');

    // Opens the URL in the default browser.
    await open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');

    // Opens the URL in a specified browser.
    await open('https://github.com/MyUserNameIsMyUserName', {app: {name: 'firefox'}});

  }
}

SampleOpenCommand.description = `Describe the command here
...
Extra documentation goes here
`

SampleOpenCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SampleOpenCommand
