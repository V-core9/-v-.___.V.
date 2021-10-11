// https://www.npmjs.com/package/express

const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  console.log(req.route);
  res.send("Hello World");
});

console.log(`URL: http://localhost:${port}`);
app.listen(port);
