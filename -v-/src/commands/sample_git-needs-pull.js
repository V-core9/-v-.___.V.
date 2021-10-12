const { Command, flags } = require('@oclif/command')

class SampleGitNeedsPullCommand extends Command {
  async run() {
    const { flags } = this.parse(SampleGitNeedsPullCommand)
    //const name = flags.name || 'world'
    //this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\⧋_V_⧋\\-v-\\src\\commands\\sample_git-needs-pull.js`)
    const needsPull = require('git-needs-pull');

    console.log(needsPull()); // true or false of process.cwd()
    //needsPull('any/git/repo'); // true or false
  }
}

SampleGitNeedsPullCommand.description = `Describe the command here
...
Extra documentation goes here
`

SampleGitNeedsPullCommand.flags = {
  name: flags.string({ char: 'n', description: 'name to print' }),
}

module.exports = SampleGitNeedsPullCommand
