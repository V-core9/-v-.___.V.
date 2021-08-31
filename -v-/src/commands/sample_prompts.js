const {Command, flags} = require('@oclif/command')

class SamplePromptsCommand extends Command {
  async run() {
    const {flags} = this.parse(SamplePromptsCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sample_prompts.js`)

    const prompts = require('prompts');

    const questions = [
      {
        type: 'text',
        name: 'meaning',
        message: 'What is the meaning of life?'
      },
      {
        type: 'text',
        name: 'username',
        message: 'What is your GitHub username?'
      },
      {
        type: 'text',
        name: 'dish',
        message: 'Do you like pizza?'
      },
      {
        type: prev => prev == 'pizza' ? 'text' : null,
        name: 'topping',
        message: 'Name a topping'
      },
      {
        type: 'text',
        name: 'about',
        message: 'Tell something about yourself',
        initial: 'Why should I?'
      },
      {
        type: 'number',
        name: 'value',
        message: 'How old are you?',
        validate: value => value < 18 ? `Nightclub is 18+ only` : true
      }
    ];
    
    (async () => {
      const response = await prompts(questions);
    
      // => response => { username, age, about }
      console.log(response);
    })(); 

  }
}

SamplePromptsCommand.description = `Describe the command here
...
Extra documentation goes here
`

SamplePromptsCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SamplePromptsCommand
