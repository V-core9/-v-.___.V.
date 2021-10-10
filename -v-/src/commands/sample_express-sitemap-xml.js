const { Command, flags } = require('@oclif/command');
const { buildSitemaps } = require('express-sitemap-xml');



async function run() {
  const urls = ['/1', '/2', '/3'];
  const sitemaps = await buildSitemaps(urls, 'http://localhost:8080/');

  console.log(Object.keys(sitemaps));
  // ['/sitemap.xml']

  console.log(sitemaps['/sitemap.xml']);
  // `<?xml version="1.0" encoding="utf-8"?>
  //  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  //    <url>
  //      <loc>https://bitmidi.com/1</loc>
  //      <lastmod>${getTodayStr()}</lastmod>
  //    </url>
  //    <url>
  //      <loc>https://bitmidi.com/2</loc>
  //      <lastmod>${getTodayStr()}</lastmod>
  //    </url>
  //    <url>
  //      <loc>https://bitmidi.com/3</loc>
  //      <lastmod>${getTodayStr()}</lastmod>
  //    </url>
  //  </urlset>`
}


class SampleExpressSitemapXmlCommand extends Command {
  async run() {
    const { flags } = this.parse(SampleExpressSitemapXmlCommand)
    const name = flags.name || 'world';
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\NODEjs_TryOuts\\-v-\\src\\commands\\sample_express-sitemap-xml.js`);
    run();
  }
}

SampleExpressSitemapXmlCommand.description = `Describe the command here
...
Extra documentation goes here
`

SampleExpressSitemapXmlCommand.flags = {
  name: flags.string({ char: 'n', description: 'name to print' }),
}

module.exports = SampleExpressSitemapXmlCommand
