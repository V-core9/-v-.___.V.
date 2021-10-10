const { Command, flags } = require('@oclif/command')


class SampleWebpConverterCommand extends Command {
  async run() {
    const { flags } = this.parse(SampleWebpConverterCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sample_webp-converter.js`);


    const webp = require('webp-converter');
    //pass input image(.jpeg,.pnp .....) path ,output image(give path where to save and image file name with .webp extension)
    //pass option(read  documentation for options)

    //cwebp(input,output,option)

    const result = webp.cwebp("sample1.jpg", "sample1.webp", "-q 80", logging = "-v");
    result.then((response) => {
      console.log(response);
    });
  }
}

SampleWebpConverterCommand.description = `Describe the command here
...
Extra documentation goes here
`

SampleWebpConverterCommand.flags = {
  name: flags.string({ char: 'n', description: 'name to print' }),
}

module.exports = SampleWebpConverterCommand
