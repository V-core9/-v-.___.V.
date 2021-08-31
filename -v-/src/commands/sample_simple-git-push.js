const {Command, flags} = require('@oclif/command')

class SampleSimpleGitPushCommand extends Command {
  async run() {
    const {flags} = this.parse(SampleSimpleGitPushCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sample_simple-git-push.js`)

    const simpleGit = require('simple-git');
    const git = simpleGit();

    git.push("origin", "_V_011_Git").then(() => console.log('PUSH finished')).catch((err) => console.error('PUSH failed: ', err));
  }
}

SampleSimpleGitPushCommand.description = `Describe the command here
...
Extra documentation goes here
`

SampleSimpleGitPushCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SampleSimpleGitPushCommand
