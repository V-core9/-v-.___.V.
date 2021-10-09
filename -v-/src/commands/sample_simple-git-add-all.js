const {Command, flags} = require('@oclif/command')

class SampleSimpleGitAddAllCommand extends Command {
  async run() {
    const {flags} = this.parse(SampleSimpleGitAddAllCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sample_simple-git-add-all.js`)
    
    const simpleGit = require('simple-git');
    const git = simpleGit();

    git.add('./*').then(() => console.log('finished')).catch((err) => console.error('failed: ', err));
  }
}

SampleSimpleGitAddAllCommand.description = `Example of Simple-git npm doing [add all]
...
simple-git -> https://www.npmjs.com/package/simple-git
2.45.0 • Public • Published 4 days ago

npm i simple-git --save

Repository
> github.com/steveukx/git-js

Homepage
> github.com/steveukx/git-js#readme
`

SampleSimpleGitAddAllCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SampleSimpleGitAddAllCommand
