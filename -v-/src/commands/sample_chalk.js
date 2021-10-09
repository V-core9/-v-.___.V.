const {Command, flags} = require('@oclif/command')

class SampleChalkCommand extends Command {
  async run() {
    const {flags} = this.parse(SampleChalkCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\chalk_demo_sample.js`)

      const chalk = require('chalk');
      const log = console.log;

      // Combine styled and normal strings
      log(chalk.blue('Hello') + ' World' + chalk.red('!'));

      // Compose multiple styles using the chainable API
      log(chalk.blue.bgRed.bold('Hello world!'));

      // Pass in multiple arguments
      log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

      // Nest styles
      log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

      // Nest styles of the same type even (color, underline, background)
      log(chalk.green(
        'I am a green line ' +
        chalk.blue.underline.bold('with a blue substring') +
        ' that becomes green again!'
      ));

      // ES2015 template literal
      log(`
      CPU: ${chalk.red('90%')}
      RAM: ${chalk.green('40%')}
      DISK: ${chalk.yellow('70%')}
      `);

      // ES2015 tagged template literal
      log(chalk`
      CPU: {red ${cpu.totalPercent}%}
      RAM: {green ${ram.used / ram.total * 100}%}
      DISK: {rgb(255,131,0) ${disk.used / disk.total * 100}%}
      `);

      // Use RGB colors in terminal emulators that support it.
      log(chalk.keyword('orange')('Yay for orange colored text!'));
      log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
      log(chalk.hex('#DEADED').bold('Bold gray!'));

  }
}

SampleChalkCommand.description = `Terminal string styling done right
...
chalk -> https://www.npmjs.com/package/chalk
TypeScript icon, indicating that this package has built-in type declarations
4.1.2 • Public • Published a month ago

Chalk comes with an easy to use composable API where you just chain and nest the styles you want.

Repository
-> github.com/chalk/chalk

Homepage
-> github.com/chalk/chalk#readme
`

SampleChalkCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SampleChalkCommand
