const {Command, flags} = require('@oclif/command')

class SampleEnquirerCommand extends Command {
  async run() {
    const {flags} = this.parse(SampleEnquirerCommand)
    const alt_ver = flags.alt_ver || null
    this.log(`hello ${alt_ver} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sample_enquirer.js`)

    const { Survey } = require('enquirer');
    const { Scale } = require('enquirer');
 
    if (alt_ver === null) {
      const prompt = new Survey({
        name: 'experience',
        message: 'Please rate your experience',
        scale: [
          { name: '1', message: 'Strongly Disagree' },
          { name: '2', message: 'Disagree' },
          { name: '3', message: 'Neutral' },
          { name: '4', message: 'Agree' },
          { name: '5', message: 'Strongly Agree' }
        ],
        margin: [0, 0, 2, 1],
        choices: [
          {
            name: 'interface',
            message: 'The website has a friendly interface.'
          },
          {
            name: 'navigation',
            message: 'The website is easy to navigate.'
          },
          {
            name: 'images',
            message: 'The website usually has good images.'
          },
          {
            name: 'upload',
            message: 'The website makes it easy to upload images.'
          },
          {
            name: 'colors',
            message: 'The website has a pleasing color palette.'
          }
        ]
      });
      
      prompt.run()
        .then(value => console.log('ANSWERS:', value))
        .catch(console.error);
    } else {
      const prompt2 = new Scale({
        name: 'experience',
        message: 'Please rate your experience',
        scale: [
          { name: '1', message: 'Strongly Disagree' },
          { name: '2', message: 'Disagree' },
          { name: '3', message: 'Neutral' },
          { name: '4', message: 'Agree' },
          { name: '5', message: 'Strongly Agree' }
        ],
        margin: [0, 0, 2, 1],
        choices: [
          {
            name: 'interface',
            message: 'The website has a friendly interface.',
            initial: 2
          },
          {
            name: 'navigation',
            message: 'The website is easy to navigate.',
            initial: 2
          },
          {
            name: 'images',
            message: 'The website usually has good images.',
            initial: 2
          },
          {
            name: 'upload',
            message: 'The website makes it easy to upload images.',
            initial: 2
          },
          {
            name: 'colors',
            message: 'The website has a pleasing color palette.',
            initial: 2
          }
        ]
      });
       
      prompt2.run()
        .then(value => console.log('ANSWERS:', value))
        .catch(console.error);
    }
  }
}

SampleEnquirerCommand.description = `Stylish CLI prompts that are user-friendly, intuitive and easy to create.
...
enquirer -> 
2.3.6 • Public • Published a year ago

Prompts should be more like conversations than inquisitions▌

npm i enquirer --save

Repository
> github.com/enquirer/enquirer

Homepage
> github.com/enquirer/enquirer
`

SampleEnquirerCommand.flags = {
  alt_ver: flags.string({char: 'a', description: 'alt_ver will print scale instead of survey\nNOTE: Put any value in it to trigger.'}),
}

module.exports = SampleEnquirerCommand
