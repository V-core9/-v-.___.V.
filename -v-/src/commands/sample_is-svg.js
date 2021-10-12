const { Command, flags } = require('@oclif/command')

class SampleIsSvgCommand extends Command {
  async run() {
    const { flags } = this.parse(SampleIsSvgCommand)
    const svgString = flags.svgString || null;
    const isSvg = require('is-svg');
    if (svgString === null) {
      console.log("Is SVG DEMO _____", isSvg('<svg xmlns="http://www.w3.org/2000/svg"><path fill="#00CD9F"/></svg>'))
    } else {
      var resVal = isSvg(svgString);
      console.log(resVal);
      return resVal;
    }
  }
}

SampleIsSvgCommand.description = `Check if a string or buffer is SVG
...
Ref.URL : https://www.npmjs.com/package/is-svg
`

SampleIsSvgCommand.flags = {
  svgString: flags.string({ char: 's', description: 'svgString to check' }),
}

module.exports = SampleIsSvgCommand
