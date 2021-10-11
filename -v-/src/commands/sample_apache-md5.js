const { Command, flags } = require('@oclif/command')

class SampleApacheMd5Command extends Command {
  async run() {
    const { flags } = this.parse(SampleApacheMd5Command);
    const name = flags.name || 'world';
    this.log(`hello ${name} from C:\\Users\\-v-\\_V_\\-v-__v\\-v-\\src\\commands\\sample_apache-md5.js`);

    const md5 = require("apache-md5");

    // Encrypting password using apache's md5 algorithm.
    const encryptedPassword = md5("mypass");

    // Should print true.
    console.log("Should print [TRUE]. >>> ");
    console.log(md5("mypass", encryptedPassword) == encryptedPassword);
    console.log("");
    // Should print false.
    console.log("Should print [FALSE]. >>> ");
    console.log(md5("notmypass", encryptedPassword) == encryptedPassword);
    console.log("");

  }
}

SampleApacheMd5Command.description = `Describe the command here
...
Extra documentation goes here
`

SampleApacheMd5Command.flags = {
  name: flags.string({ char: 'n', description: 'name to print' }),
}

module.exports = SampleApacheMd5Command
