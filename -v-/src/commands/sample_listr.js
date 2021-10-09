const {Command, flags} = require('@oclif/command')

class SampleListrCommand extends Command {
  async run() {
    const {flags} = this.parse(SampleListrCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sample_listr.js`)

    const execa = require('execa');
    const Listr = require('listr');
     
    const tasks = new Listr([
        {
            title: 'Git',
            task: () => {
                return new Listr([
                    {
                        title: 'Checking git status',
                        task: () => execa.stdout('git', ['status', '--porcelain']).then(result => {
                            if (result !== '') {
                                throw new Error('Unclean working tree. Commit or stash changes first.');
                            }
                        })
                    },
                    {
                        title: 'Checking remote history',
                        task: () => execa.stdout('git', ['rev-list', '--count', '--left-only', '@{u}...HEAD']).then(result => {
                            if (result !== '0') {
                                throw new Error('Remote history differ. Please pull changes.');
                            }
                        })
                    }
                ], {concurrent: true});
            }
        },
        {
            title: 'Install package dependencies with Yarn',
            task: (ctx, task) => execa('yarn')
                .catch(() => {
                    ctx.yarn = false;
     
                    task.skip('Yarn not available, install it via `npm install -g yarn`');
                })
        },
        {
            title: 'Install package dependencies with npm',
            enabled: ctx => ctx.yarn === false,
            task: () => execa('npm', ['install'])
        },
        {
            title: 'Run tests',
            task: () => execa('npm', ['test'])
        },
        {
            title: 'Publish package',
            task: () => execa('npm', ['publish'])
        }
    ]);
     
    tasks.run().catch(err => {
        console.error(err);
    });



  }
}

SampleListrCommand.description = `Terminal task list
...
listr -> https://www.npmjs.com/package/listr
DefinitelyTyped icon, indicating that this package has TypeScript declarations provided by the separate @types/listr package
0.14.3 • Public • Published 3 years ago

Repository
-> github.com/SamVerschueren/listr

Homepage
-> github.com/SamVerschueren/listr#readme

npm install --save listr

`

SampleListrCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SampleListrCommand
