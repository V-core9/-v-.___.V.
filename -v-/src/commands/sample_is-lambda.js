const { Command, flags } = require('@oclif/command')

class SampleIsLambdaCommand extends Command {
  async run() {
    const { flags } = this.parse(SampleIsLambdaCommand)
    var isLambda = require('is-lambda')

    console.log('The code is running on a AWS Lambda : ', isLambda)
  }
}

SampleIsLambdaCommand.description = `Describe the command here
...
Extra documentation goes here
`

SampleIsLambdaCommand.flags = {
}

module.exports = SampleIsLambdaCommand
