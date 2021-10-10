var Sitemapper = require('sitemapper');
const { Command, flags } = require('@oclif/command')

class SampleSitemapperCommand extends Command {
  async run() {
    const { flags } = this.parse(SampleSitemapperCommand)
    const url = flags.url || 'https://www.google.com/work/sitemap.xml';
    const save = flags.save || 'https://www.google.com/work/sitemap.xml';
    this.log(`hello ${url} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sample_sitemapper.js`)

    var SiteMap = new Sitemapper({
      url: url,
      timeout: 15000 //15 seconds
    });

    SiteMap.fetch()
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
}

SampleSitemapperCommand.description = `Describe the command here
...
Extra documentation goes here
`

SampleSitemapperCommand.flags = {
  url: flags.string({ char: '-u', description: 'Source of the Sitemap to use. Giving it root/index sitemap it will provide with ARRAY of strings containing all URLs from all refered sitemaps. \nNOTE: Not providing --src with value will just get you "https://www.google.com/work/sitemap.xml" ' }),
  save: flags.boolean({ char: '-s', description: '--save || -s  <= Use this flag to enable saving option. NOTE: generates file in a Current path [ $PWD ] so it\'s  not limited or worry with limits like current user folder position.... :D ' }),
}

module.exports = SampleSitemapperCommand
