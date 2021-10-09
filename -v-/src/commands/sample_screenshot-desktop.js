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

SampleScreenshotDesktopCommand.description = `Capture a screenshot of your local machine
...
screenshot-desktop  -> https://www.npmjs.com/package/screenshot-desktop
1.12.7 • Public • Published a month ago

Multi/Cross Platform
Linux: required ImageMagick apt-get install imagemagick
OSX: No dependencies required!
Windows: No dependencies required!
Promise based API
JPG output (by default)

npm install --save screenshot-desktop

Repository
> github.com/bencevans/screenshot-desktop

Homepage
> github.com/bencevans/screenshot-desktop#readme

`

SampleScreenshotDesktopCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SampleScreenshotDesktopCommand
