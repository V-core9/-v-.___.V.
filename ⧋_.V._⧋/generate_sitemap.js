const fs = require("fs");
const { buildSitemaps } = require('express-sitemap-xml');
const urls = JSON.parse(fs.readFileSync("./PUBLIC/sitemap_array.txt", { encoding: 'utf8', flag: 'r' }));

console.log(urls)

async function run() {
  const sitemaps = await buildSitemaps(urls.sites, 'http://localhost.com');

  console.log(sitemaps['/sitemap.xml']);
  fs.writeFileSync("./PUBLIC/sitemap_index.xml", sitemaps['/sitemap.xml']);
}


run();
