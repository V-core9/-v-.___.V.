const { Command, flags } = require('@oclif/command')
const isValidNpmName = require('is-valid-npm-name');
class SampleIsValidNpmNameCommand extends Command {
  async run() {
    const { flags } = this.parse(SampleIsValidNpmNameCommand)
    const name = flags.name || 'fs';
    const nameRes = isValidNpmName(name);

    // `check` is `true` or a String (e.g. why it was not a valid npm name)
    //if (nameRes !== true) {
    //   console.error(nameRes);
    // 'package name cannot use built-in core Node module name'
    //} 
    console.log(nameRes);

  }
}

SampleIsValidNpmNameCommand.description = `Checks if a given string is a valid npm package name adhering to npm rules and best practice
...
REF.URL : https://www.npmjs.com/package/is-valid-npm-name


Error Strings
- package name must be a String
- remove trailing spaces from start and end of package name
- package name cannot be more than 214 characters
- package name cannot start with a dot nor underscore
- package name cannot have uppercase letters
- scoped package name must start with "@" character
- scoped package name has an extra "@" character
- scoped package name must be in the format of @myorg/package
- scoped package name has an extra "/" character
- package name cannot use built-in core Node module name
- package name had non-URL-safe characters
- Rule Exemption

We ignore a single npm rule, which is:

don't put "js" or "node" in the name

This is due to the sheer number of npm package name squatters.

Sometimes it's absolutely necessary to affix with js or node.

`

SampleIsValidNpmNameCommand.flags = {
  name: flags.string({ char: 'n', description: 'name to print' }),
}

module.exports = SampleIsValidNpmNameCommand
