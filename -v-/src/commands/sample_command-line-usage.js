const {Command, flags} = require('@oclif/command')

class SampleCommandLineUsageCommand extends Command {
  async run() {
    const {flags} = this.parse(SampleCommandLineUsageCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sample_command-line-usage.js`)

    const getUsage = require('command-line-usage')
    const ussr =
    `                         M
                              MM
                               ,MM
                                 MMM
                                  MMM
                   MMMMMMMM~       MMMM
                  MMMMMMMM          MMMM
                MMMMMMMMM            MMMM
              MMMMMMMMM              MMMM7
            +MMMMMMMMMMM=             MMMM
           MMMMMMMMM MMMMM            MMMMM
             MMMMM    MMMMMN          MMMMM
               M       MMMMMM         MMMMM
                         MMMMM?       MMMMM
                          MMMMMM      MMMMM
                            MMMMMM   MMMMMM
                             MMMMMM  MMMMMM
              M               MMMMMMMMMMMM
           MMMMMM               MMMMMMMMM
          MMMMMMMMM              MMMMMMM?
        MMMM   MMMMMM         MMMMMMMMMMM
     MMMMMM     MMMMMMMMMMMMMMMMMMMMMMMMMM
    MMMMMM        MMMMMMMMMMMMMMMMMM MMMM
    MMMM             MMMMMMMMMMMM           `
    
    const optionDefinitions = [
      {
        name: 'help',
        description: 'Display this usage guide.',
        alias: 'h',
        type: Boolean
      },
      {
        name: 'src',
        description: 'The input files to process. This is some additional text existing solely to demonstrate word-wrapping, nothing more, nothing less. And nothing in between.',
        type: String,
        multiple: true,
        defaultOption: true,
        typeLabel: '{underline file} ...'
      },
      {
        name: 'timeout',
        description: 'Timeout value in ms.',
        alias: 't',
        type: Number,
        typeLabel: '{underline ms}'
      }
    ]
    
    const sections = [
      {
        header: 'Soviet Union',
        content: {
          options: {
            columns: [
              { name: 'one', maxWidth: 40 },
              { name: 'two', width: 40, noWrap: true }
            ]
          },
          data: [
            {
              one: "At the beginning of World War II, Stalin signed a non-aggression pact with Hitler's Germany; the treaty delayed confrontation between the two countries.\n\nIn June 1941 the Germans invaded, opening the largest and bloodiest theater of war in history. Soviet war casualties accounted for the highest proportion of the conflict in the cost of acquiring the upper hand over Axis forces at intense battles such as Stalingrad. Soviet forces eventually captured Berlin in 1945.\n\nThe territory overtaken by the Red Army became satellite states of the Eastern Bloc. The Cold War emerged in 1947 as the Soviet bloc confronted the Western states that united in the North Atlantic Treaty Organization in 1949.",
              two: ussr
            }
          ]
        }
      },
      {
        header: 'Synopsis',
        content: [
          '$ example [{bold --timeout} {underline ms}] {bold --src} {underline file} ...',
          '$ example {bold --help}'
        ]
      },
      {
        header: 'Options',
        optionList: optionDefinitions
      }
    ]
    
    console.log(getUsage(sections))
    


  }
}

SampleCommandLineUsageCommand.description = `A simple, data-driven module for creating a usage guide.
...
command-line-usage -> https://www.npmjs.com/package/command-line-usage    
DefinitelyTyped icon, indicating that this package has TypeScript declarations provided by the separate @types/command-line-usage package
6.1.1 • Public • Published 10 months ago


Synopsis
A usage guide is created by first defining an arbitrary number of sections, e.g. a description section, synopsis, option list, examples, footer etc.
`

SampleCommandLineUsageCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SampleCommandLineUsageCommand
