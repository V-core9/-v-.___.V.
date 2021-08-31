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

SampleOpenCommand.description = `Open stuff like URLs, files, executables. Cross-platform.
...
open => https://www.npmjs.com/package/open
8.2.1 • Public • Published 2 months ago

npm i open --save

This is meant to be used in command-line tools and scripts, not in the browser.
If you need this for Electron, use shell.openPath() instead.
Note: The original open package was previously deprecated in favor of this package, and we got the name, so this package is now named open instead of opn. If you're upgrading from the original open package (open@0.0.5 or lower), keep in mind that the API is different.

Repository
> github.com/sindresorhus/open

Homepage
> github.com/sindresorhus/open#readme

`

SampleOpenCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SampleOpenCommand
