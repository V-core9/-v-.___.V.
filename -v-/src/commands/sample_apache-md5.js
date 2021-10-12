const { Command, flags } = require('@oclif/command')

class SampleApacheMd5Command extends Command {
  async run() {
    const { flags } = this.parse(SampleApacheMd5Command);
    const input_md5 = flags.input_md5 || 'example_password';
    this.log(`Input value:  ${input_md5} `);

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

SampleApacheMd5Command.description = `Node.js package for Apache style password encryption using md5.
...
apache-md5
1.1.7 • Public • Published 2 months ago

npm install apache-md5

Repository
->  github.com/gevorg/apache-md5

Homepage
->  github.com/gevorg/apache-md5


Just an example/sample command showing how you can just pass in string
and get resulting hash from it/confirm it hashed....
Or pass it in and compare with known hash value to confirm it's the same.
`

SampleApacheMd5Command.flags = {
  input_md5: flags.string({ char: 'i', description: 'input string to use' }),
}

module.exports = SampleApacheMd5Command
