require("dotenv").config();

const fs = require('fs')

const { buildSitemaps } = require('express-sitemap-xml')

const urls = JSON.parse(fs.readFileSync('./PUBLIC/sitemap_array.json', { encoding: 'utf8', flag: 'r' }));
console.log(urls.sites);
const sitemaps = buildSitemaps(urls.sites, 'https://instacraftcbd.com');



const vApp = {
  data: {
    totalPageViews: 0,
    totalUsersVisit: 0,
  },
  vClientApp: {
    styles: [
      {
        type: "name",
        style: "glide_slider"
      },
      {
        type: "url",
        style: "https://randomweburl.123/$33221/41?213"
      },
      {
        type: "code",
        style() {
          return `
        * {
          font-family: monospace;
          padding: 0;
          margin: 0;
          font-size: 16px;
        }

        html, body {
          background: $101525;
          color: white;
        }
      `
        }
      }
    ]
  },
  sitemap: {
    xml_page: null,
    path: "/sitemap_index.xml"
  },
  compression: require("compression"),
  express: require("express"),
  bodyParser: require("body-parser"),
  path: require("path"),
  isOnline: require("is-online"),
  app: null,
  requestTime(req, res, next) {
    req.requestTime = Date.now();
    next();
  },
  userAgent(req, res, next) {
    req.userAgent = req.headers['user-agent'];
    next();
  },
  myLogger(req, res, next) {
    //console.log(`Host: ${req.headers.host}  \nUser - agent:   ${req.userAgent} \nTIMEOF: ${Date.now()}`);
    next();
  },
  pageViewCounter(req, res, next) {
    vApp.data.totalPageViews++;
    next();
  }
}

vApp.sitemap.xml_page = sitemaps['/sitemap.xml']



vApp.app = vApp.express();
vApp.app.use(vApp.requestTime);
vApp.app.use(vApp.userAgent);
vApp.app.use(vApp.myLogger);
vApp.app.use(vApp.pageViewCounter);

printInlineScript = (codeToPrint = null) => {
  if (codeToPrint !== null) {
    try {
      return `<script>${codeToPrint}</script>`;
    } catch (err) {
      return err;
    };
  };
  return false;
}

vApp.app.get('/sitemap_index.xml', (req, res) => {

  res.type('application/xml');
  res.send(vApp.sitemap.xml_page);
});


vApp.app.get('/*', (req, res) => {

  var responseText = `${printInlineScript(JSON.stringify(vApp.vClientApp))}<h2>GET YEAAA World!</h2> < p > Requested at: <strong> ${req.requestTime} </strong></ ><p>User Agent: <strong>${req.userAgent} </strong></p><p>URL: <strong> ${req.path} </strong></p>`;

  res.send(responseText);
});

setInterval(() => {
  console.log(vApp.data.totalPageViews)
}, 1000);



vApp.app.listen(3000);
