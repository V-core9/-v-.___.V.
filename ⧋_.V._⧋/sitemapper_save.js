const Sitemapper = require('sitemapper');
const fs = require('fs')
const sitemap = new Sitemapper();

sitemap.fetch('https://instacraftcbd.com/sitemap_index.xml').then(function (sites) {
  saveSites(sites)
});


function saveSites(sites) {
  console.log(sites)
  console.log(fs.writeFileSync('./PUBLIC/sitemap_array.txt', JSON.stringify(sites)), { encoding: 'utf8', flag: 'r' });
}
