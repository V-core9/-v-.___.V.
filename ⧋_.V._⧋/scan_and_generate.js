
//-----------------------------------------------------------
// SCAN AND SAVE
//-----------------------------------------------------------


const Sitemapper = require('sitemapper');
const fs = require('fs')
const sitemap = new Sitemapper();
const rootURL = "https://quickmedcards.com";
sitemap.fetch(rootURL + '/sitemap_index.xml').then(function (sites) {
  saveSites(sites)
});


function saveSites(sites) {
  var resp = {
    url: sites.url,
    sites: []
  }
  sites.sites.forEach(item => {
    resp.sites.push(item.replace("https://quickmedcards.com", ""));
  });
  console.log(resp)
  console.log(fs.writeFileSync('./PUBLIC/sitemap_array.txt', JSON.stringify(resp)), { encoding: 'utf8', flag: 'r' });

  generateSitemap()
}

//-----------------------------------------------------------
// GENERATE XML
//-----------------------------------------------------------

const { buildSitemaps } = require('express-sitemap-xml');
async function generateSitemap() {
  const urls = JSON.parse(fs.readFileSync("./PUBLIC/sitemap_array.txt", { encoding: 'utf8', flag: 'r' }));

  console.log(urls)

  async function run() {
    const sitemaps = await buildSitemaps(urls.sites, 'http://quickmedcards.com');

    console.log(sitemaps['/sitemap.xml']);
    fs.writeFileSync("./PUBLIC/sitemap_index.xml", sitemaps['/sitemap.xml']);
  }


  run();

}
