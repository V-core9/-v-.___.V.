const {Command, flags} = require('@oclif/command')

class SampleMultiviewCommand extends Command {
  async run() {
    const {flags} = this.parse(SampleMultiviewCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sample_multiview.js`)

    var mv = require('multiview')({
      efficient: true
    })

    mv.spawn('ls', ['-l'])
    mv.spawn('node', ['--help']);
    mv.spawn('find', ['../', 'node_modules'])

    /*
    var mvstream = mv.stream('List contents of current directory')
    var spawn = child_process.spawn('ls');
    spawn.stdout.pipe(mvstream)
    
    spawn.on('exit', function(code){
      mvstream.exit(code)
    })
    
    mv.on('exit', function(stream, code){
      console.log('process stream exited with code:', code)
    })
    */
  }
}

SampleMultiviewCommand.description = `Spawn multiple processes and channel their outputs into separate little column views.
...
multiview
3.0.1 • Public • Published a year ago

This package provides:

a CLI tool to spawn multiple processes and concurrently view their output.
a Node module to do the same.
And provides the ability to:

handle ANSI color output from processes. (Currently does not support cursor position ANSI codes)
present all spawned process outputs neatly into columns.
choose display efficiency modes.
handle process exit codes.
initiate multiple instances and aggregate their output.
`

SampleMultiviewCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SampleMultiviewCommand
