const {Command, flags} = require('@oclif/command')

class SampleScreenshotDesktopCommand extends Command {
  async run() {
    const {flags} = this.parse(SampleScreenshotDesktopCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sample_screenshot-desktop.js`)


    const screenshot = require('screenshot-desktop');

    screenshot({ filename: 'resources/imgs/demo.jpg' }).then((img) => {
      // img: Buffer filled with jpg goodness
      // ...
      console.log("Screenshot Successfully Taken");
    }).catch((err) => {
      // ...
      console.error(err);
    });
  }
}

SampleScreenshotDesktopCommand.description = `Describe the command here
...
Extra documentation goes here
`

SampleScreenshotDesktopCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SampleScreenshotDesktopCommand
