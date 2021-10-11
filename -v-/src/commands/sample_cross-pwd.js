const {Command, flags} = require('@oclif/command')
var pwd = require('cross-pwd')

class SampleCrossPwdCommand extends Command {
  async run() {    
    console.log(pwd());
  }
}

SampleCrossPwdCommand.description = `Sample of cross platform PWD finder
...
URL_ref >> https://www.npmjs.com/package/cross-pwd
Cross platform PWD (pathname of the current working directory)
`

SampleCrossPwdCommand.flags = {
  
}

module.exports = SampleCrossPwdCommand
