const {Command, flags} = require('@oclif/command')

class SampleSimpleGitCommand extends Command {
  async run() {
    const {flags} = this.parse(SampleSimpleGitCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sample_simple-git.js`)

    const simpleGit = require('simple-git');
    const git = simpleGit();

    git.status().then(result => {
      console.log(result);
    });
  }
}

SampleSimpleGitCommand.description = `Describe the command here
...
Extra documentation goes here
`

SampleSimpleGitCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SampleSimpleGitCommand
