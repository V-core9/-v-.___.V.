const {Command, flags} = require('@oclif/command')

class SampleIsOnlineCommand extends Command {
  async run() {
    const { flags } = this.parse(SampleIsOnlineCommand)
    const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\is_online.js`)

    const isOnline = require('is-online');

    (async () => {
      console.log(await isOnline());
      //=> true
    })();

  }
}

SampleIsOnlineCommand.description = `Check if the internet connection is up
...
is-online -> https://www.npmjs.com/package/is-online
TypeScript icon, indicating that this package has built-in type declarations
9.0.1 • Public • Published 3 months ago

Repository
->  github.com/sindresorhus/is-online

Homepage
->  github.com/sindresorhus/is-online#readme

Works in Node.js and the browser (with a bundler).
In the browser you have navigator.onLine, but it's useless as it only tells you if there's a local connection, and not whether the internet is accessible.

npm install is-online

============================
const isOnline = require('is-online');

(async () => {
	console.log(await isOnline());
	//=> true
})();
============================
`

SampleIsOnlineCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SampleIsOnlineCommand
