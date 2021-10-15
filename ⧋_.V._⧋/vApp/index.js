

const fs = require('fs')

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
  helpers: {
    printInlineScript : (codeToPrint = null) => {
      if (codeToPrint !== null) {
        try {
          return `<script>${codeToPrint}</script>`;
        } catch (err) {
          return err;
        };
      };
      return false;
    }
  },
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
  },
  init($_PORT = 3000) {

    vApp.sitemap.xml_page = fs.readFileSync('./PUBLIC/sitemap_index.xml', { encoding: 'utf8', flag: 'r' })

    console.log(vApp.sitemap);
        
    vApp.app = vApp.express();
    vApp.app.use(vApp.requestTime);
    vApp.app.use(vApp.userAgent);
    vApp.app.use(vApp.myLogger);
    vApp.app.use(vApp.pageViewCounter);
    
    vApp.app.get('/sitemap_index.xml', (req, res) => {
      res.type('application/xml');
      res.send(vApp.sitemap.xml_page);
    });
    
    vApp.app.get('/*', (req, res) => {
    
      var responseText = `${vApp.helpers.printInlineScript(JSON.stringify(vApp.vClientApp))}<h2>GET YEAAA World!</h2> 
              <p> Requested at: <strong> ${req.requestTime} </strong></p>
              <p>User Agent: <strong>${req.userAgent} </strong></p>
              <p>app : <strong>${req.app}</strong></p>
              <p>baseUrl : <strong>${req.baseUrl}</strong></p>
              <p>body : <strong>${req.body}</strong></p>
              <p>cookies : <strong>${req.cookies}</strong></p>
              <p>fresh : <strong>${req.fresh}</strong></p>
              <p>host : <strong>${req.host}</strong></p>
              <p>hostname : <strong>${req.hostname}</strong></p>
              <p>ip : <strong>${req.ip}</strong></p>
              <p>ips : <strong>${req.ips}</strong></p>
              <p>method : <strong>${req.method}</strong></p>
              <p>originalUrl : <strong>${req.originalUrl}</strong></p>
              <p>params : <strong>${req.params}</strong></p>
              <p>path : <strong>${req.path}</strong></p>
              <p>protocol : <strong>${req.protocol}</strong></p>
              <p>query : <strong>${req.query}</strong></p>
              <p>route : <strong>${req.route}</strong></p>
              <p>secure : <strong>${req.secure}</strong></p>
              <p>signedCookies : <strong>${req.signedCookies}</strong></p>
              <p>stale : <strong>${req.stale}</strong></p>
              <p>subdomains : <strong>${req.subdomains}</strong></p>
              <p>xhr : <strong>${req.xhr}</strong></p>
              <p>URL: <strong> ${req.path} </strong></p>`;
    
      res.send(responseText);
    });
    
    setInterval(() => {
      console.log(vApp.data.totalPageViews)
    }, 1000);
    
    vApp.app.listen($_PORT);
  }
}

module.exports = vApp;
