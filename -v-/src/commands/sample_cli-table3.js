const {Command, flags} = require('@oclif/command')

class SampleCliTable3Command extends Command {
  async run() {
    const {flags} = this.parse(SampleCliTable3Command)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sample_cli-table3.js`)

    var Table = require('cli-table3');
 
    // instantiate
    var table = new Table({
        head: ['TH 1 label', 'TH 2 label']
      , colWidths: [100, 200]
    });
     
    // table is an Array, so you can `push`, `unshift`, `splice` and friends
    table.push(
        ['First value', 'Second value']
      , ['First value', 'Second value']
    );
    var table2 = new Table();
 
    table2.push(
        { 'Some key': 'Some value' }
      , { 'Another key': 'Another value' }
    );
    var table3 = new Table({ head: ["", "Top Header 1", "Top Header 2"] });
 
    table3.push(
        { 'Left Header 1': ['Value Row 1 Col 1', 'Value Row 1 Col 2'] }
      , { 'Left Header 2': ['Value Row 2 Col 1', 'Value Row 2 Col 2'] }
    );

    var table4 = new Table({
      chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
             , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
             , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
             , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
    });
     
    table4.push(
        ['foo', 'bar', 'baz']
      , ['frob', 'bar', 'quuz']
    );
    console.log(table.toString());
    console.log(table2.toString());
    console.log(table3.toString());
    console.log(table4.toString());

    var table5 = new Table({ chars: {'mid': '', 'left-mid': '', 'mid-mid': '', 'right-mid': ''} });
    table5.push(
        ['foo', 'bar', 'baz']
      , ['frobnicate', 'bar', 'quuz']
    );
    
    console.log(table5.toString());

    var table6 = new Table({
      chars: { 'top': '' , 'top-mid': '' , 'top-left': '' , 'top-right': ''
             , 'bottom': '' , 'bottom-mid': '' , 'bottom-left': '' , 'bottom-right': ''
             , 'left': '' , 'left-mid': '' , 'mid': '' , 'mid-mid': ''
             , 'right': '' , 'right-mid': '' , 'middle': ' ' },
      style: { 'padding-left': 5, 'padding-right': 0 }
    });
     
    table6.push(
        ['foo', 'bar', 'baz']
      , ['frobnicate', 'bar', 'quuz']
    );
     
    console.log(table6.toString());

  }
}

SampleCliTable3Command.description = `This utility allows you to render unicode-aided tables on the command line from your node.js scripts.
...
cli-table3 => https://www.npmjs.com/package/cli-table3
0.6.0 • Public • Published a year ago

cli-table3 is based on (and api compatible with) the original cli-table, and cli-table2, which are both unmaintained. cli-table3 includes all the additional features from cli-table2.

npm i cli-table3

Repository
> github.com/cli-table/cli-table3

Homepage
> github.com/cli-table/cli-table3
`

SampleCliTable3Command.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SampleCliTable3Command
