const { Command, flags } = require('@oclif/command');
const open = require('open')
var http = require('http');
var mobile = require('is-mobile');

class SampleIsMobileCommand extends Command {
  async run() {
    const { flags } = this.parse(SampleIsMobileCommand)
    const mode = flags.mode || "CLI";
    if (mode !== "web") {
      console.log(mobile());
      // => false
    } else {
      var server = http.createServer(function (req, res) {
        res.end("IS MOBILE : " + mobile({ ua: req }));
      });
      var demoPort = 8484;
      server.listen(demoPort);
      open(`http://localhost:${demoPort}`)

    }
  }
}

SampleIsMobileCommand.description = `Check if mobile browser, based on useragent string.
...
mobile({ [ua], [tablet], [featureDetect] })
Returns true if a mobile browser is being used.

If you don't specify opts.ua it will use navigator.userAgent.

To add support for tablets, set tablet: true.

To enable feature detection (i.e. namely for iPad with iOS 13), set featureDetect: true and tablet: true. This will only work in browser environments.

opts.ua can also be an instance of a node.js http request, in which case it will read the user agent header.

`

SampleIsMobileCommand.flags = {
  mode: flags.string({ char: 'm', description: 'Demo Mode to run [cli by default || web ]' }),
}

module.exports = SampleIsMobileCommand
