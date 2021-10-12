const { Command, flags } = require('@oclif/command')

class SampleOpenGraphScraperCommand extends Command {
  async run() {
    const { flags } = this.parse(SampleOpenGraphScraperCommand)
    const urlToScrape = flags.url || "http://ogp.me/";

    const ogs = require("open-graph-scraper");
    const options = { url: urlToScrape };
    ogs(options, (error, results, response) => {
      // console.log("response:", response); // This contains the HTML of page
      // console.log("error:", error); // This returns true or false. True if there was an error. The error itself is inside the results object.
      if (error) {
        console.warn(error);
        return error;
      }
      console.log(results);
      return results;
    });
  }
}

SampleOpenGraphScraperCommand.description = `A simple node module for scraping Open Graph and Twitter Card info off a site.
...
Reference URL : https://www.npmjs.com/package/open-graph-scraper


`

SampleOpenGraphScraperCommand.flags = {
  url: flags.string({ char: 'u', description: 'URL to scrape' }),
}

module.exports = SampleOpenGraphScraperCommand
