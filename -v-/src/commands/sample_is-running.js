const { Command, flags } = require('@oclif/command')

class SampleIsRunningCommand extends Command {
  async run() {
    const { flags } = this.parse(SampleIsRunningCommand)
    const proc_id = flags.pid || null;
    if (proc_id === null) {
      console.log("DEMO : ", require('is-running')(897245));  // returns true if a process with pid 897245 is running)
    } else {
      console.log(require('is-running')(proc_id))
    }
  }
}

SampleIsRunningCommand.description = `Test if a process with a given pid is running
...
Ref.URL : https://www.npmjs.com/package/is-running
`

SampleIsRunningCommand.flags = {
  pid: flags.string({ char: 'p', description: 'PID to check' }),
}

module.exports = SampleIsRunningCommand
