// https://www.npmjs.com/package/express

const express = require("express");
var jwt = require("express-jwt");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  console.log(req.route);
  res.send("Hello World");
});

app.get(
  "/protected",
  jwt({ secret: "shhhhhhared-secret", algorithms: ["HS256"] }),
  function (req, res) {
    if (!req.user.admin) return res.sendStatus(401);
    res.sendStatus(200);
  }
);

console.log(`URL: http://localhost:${port}`);
app.listen(port);
