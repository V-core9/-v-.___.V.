const { Command, flags } = require("@oclif/command");

class DemotechMd5Command extends Command {
  async run() {
    const { flags } = this.parse(DemotechMd5Command);
    const name = flags.name || "world";
    //this.log( `hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\demotech_md5.js`);

    const md5 = require("apache-md5");
    // Encrypting password using apache's md5 algorithm.
    const encryptedPassword = md5("mypass");

    // Should print true.
    console.log("\nShould print [TRUE]. >>> ");
    console.log(md5("mypass", encryptedPassword) == encryptedPassword);
    console.log("");
    // Should print false.
    console.log("Should print [FALSE]. >>> ");
    console.log(md5("notmypass", encryptedPassword) == encryptedPassword);
    console.log("");
  }
}

DemotechMd5Command.description = `Node.js package for Apache style password encryption using md5.
...
apache-md5
1.1.7 • Public • Published 2 months ago

npm install apache-md5

Repository
->  github.com/gevorg/apache-md5

Homepage
->  github.com/gevorg/apache-md5

`;

DemotechMd5Command.flags = {
  name: flags.string({ char: "n", description: "name to print" }),
};

module.exports = DemotechMd5Command;
