// https://www.npmjs.com/package/open-graph-scraper
// A simple node module for scraping Open Graph and Twitter Card info off a site. For browser usage, we recommend using open-graph-scraper-lite.

const ogs = require("open-graph-scraper");
const options = { url: "http://ogp.me/" };
ogs(options, (error, results, response) => {
  console.log("response:", response); // This contains the HTML of page
  console.log("error:", error); // This returns true or false. True if there was an error. The error itself is inside the results object.
  console.log("\n==<[ results:", results); // This contains all of the Open Graph results
});

//==============[GOOD]=============
