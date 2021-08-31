const {Command, flags} = require('@oclif/command')

class SampleSimpleGitCommitCommand extends Command {
  async run() {
    const {flags} = this.parse(SampleSimpleGitCommitCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sample_simple-git-commit.js`)

    const simpleGit = require('simple-git');
    const git = simpleGit();

    git.commit("Example Commit Content Message").then(() => console.log('commit finished')).catch((err) => console.error('commit failed: ', err));
  }
}

SampleSimpleGitCommitCommand.description = `Describe the command here
...
Extra documentation goes here
`

SampleSimpleGitCommitCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SampleSimpleGitCommitCommand
