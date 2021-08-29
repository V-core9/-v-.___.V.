/*jshint esversion: 6 */

import isElevated from "is-elevated";
const { Command, flags } = require("@oclif/command");

class TestIsElevatedCommand extends Command {
  async run() {
    const { flags } = this.parse(TestIsElevatedCommand);
    const name = flags.name || "world";
    this.log(
      `hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\test_is-elevated.js`
    );

    console.log(await isElevated());
    //=> false
  }
}

TestIsElevatedCommand.description = `Describe the command here
...
Extra documentation goes here
`;

TestIsElevatedCommand.flags = {
  name: flags.string({ char: "n", description: "name to print" }),
};

module.exports = TestIsElevatedCommand;
