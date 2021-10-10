const { Command, flags } = require('@oclif/command')
const compress_images = require("compress-images");

function MyFun() {
  compress_images(
    "resources/img/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}",
    "resources_optimized/img/",
    { compress_force: false, statistic: true, autoupdate: true },
    false,
    { jpg: { engine: "mozjpeg", command: ["-quality", "75"] } },
    { png: { engine: "pngquant", command: ["--quality=35-75", "-o"] } },
    { svg: { engine: "svgo", command: "--multipass" } },
    {
      gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] },
    },
    function (err, completed) {
      if (completed === true) {
        // Doing something.
      }
    }
  );
}
class SampleCompressImagesCommand extends Command {
  async run() {
    const { flags } = this.parse(SampleCompressImagesCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sample_compress-images.js`)

    MyFun();
  }
}

SampleCompressImagesCommand.description = `Describe the command here
...
Extra documentation goes here
`

SampleCompressImagesCommand.flags = {
  name: flags.string({ char: 'n', description: 'name to print' }),
}

module.exports = SampleCompressImagesCommand
