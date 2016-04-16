var express = require('express');
var http = require('http');
var querystring = require('querystring');

var app = express();
app.use(express.static('public'));

var CLIENT_ID = 'amzn1.application-oa2-client.b4410251e2674ae09b17315f30a75947';
var CLIENT_SECRET = '4677872c4c7ac6c19ffa305fea1dc8015a592fff2958ff89fa5ae55bbb56dbf3';
var ACCESS_TOKEN = "figuremeout";

var options = {
  host: 'api.audible.com',
  path: '/1.0/content/B0099RKRTY/licenserequest',
  method: 'POST',
  port: 80,
  headers: {
    'Authorization': ('bearer ' + ACCESS_TOKEN),
    'Client-ID': CLIENT_ID,
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(data),
    'Accept' : 'application/json'
  }
}

var data = querystring.stringify({
  "Consumption_type":"Streaming",
  "Drm_type":"Hls"
});

var req = http.request(options, function(res){
  res.on('data', function(chunk){
    console.log('data');
  });
}).on("error", function(e){
  console.log("Got error: " + JSON.stringify(e ));
});

req.write(data);
req.end();


app.get('/', function(req, res) {
  res.render(index);
});


app.get('/auth', function(req, res) {
  console.log(req.query.access_token)
});


app.listen(process.env.PORT || 8080);
