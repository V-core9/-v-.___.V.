var express = require('express')
var app = express()


//-<-<[_ requestTime _]>->------------------
var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(requestTime)
//=<-!-:requestTime:-!->=---------=<]_.v._[>=---


//-<-<[_ userAgent _]>->------------------
var userAgent = function (req, res, next) {
  req.userAgent = req.headers['user-agent']
  next()
}

app.use(userAgent)
//=<-!-:userAgent:-!->=---------=<]_.v._[>=---


//-<-<[_ myLogger _]>->------------------
var myLogger = function (req, res, next) {
  console.log('Host: '+req.headers.host)
  console.log('user-agent: '+req.userAgent)
  console.log('TIMEOF: '+ Date.now())
  next()
}

app.use(myLogger)
//=<-!-:myLogger:-!->=---------=<]_.v._[>=---

app.get('/', function (req, res) {
  var responseText = '<h2>YEAAA World!</h2>'
  responseText += '<p>Requested at: <strong>' + req.requestTime + '</strong></p>'
  responseText += '<p>User Agent: <strong>' + req.userAgent + '</strong></p>'
  res.send(responseText)
})

app.listen(3000)
