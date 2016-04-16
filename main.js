var express = require('express');
var http = require('http');
var querystring = require('querystring');
var retext = require('retext');
var inspect = require('unist-util-inspect');
var sentiment = require('retext-sentiment');


var app = express();
app.use(express.static('public'));

//////////////////
//options
//////////////////

var CLIENT_ID = 'amzn1.application-oa2-client.b4410251e2674ae09b17315f30a75947';
var CLIENT_SECRET = '4677872c4c7ac6c19ffa305fea1dc8015a592fff2958ff89fa5ae55bbb56dbf3';
var ACCESS_TOKEN = "figuremeout";

var get_stream_from_audible = function(){
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
}


var get_random_from_array = function(array){
    return array[Math.floor(Math.random()*items.length)];
}

// corpus of musical scores
// keyed by sentiment
var music_corpus = {
    sad : [{ // can have multiple musical samples for each sentiment
        sample_id : 1,
        start_time: 1,
        end_time: 2,
    }],
    happy : [{
        sample_id : 1,
        start_time: 1,
        end_time: 2,
    }],
};

var get_sample_with_sentiment = function(sentiment){
    return get_random_from_array(music_corpus[sentiment]);
}


var get_sentiment_of_audiobook_sample = function(audiobook_sample){
    // TODO: NLP
    return 'sad';
}


var play_music_with_audiobook_sample = function(audiobook_sample){
    var sentiment = get_sentiment_of_audiobook_sample(audiobook_sample);
    var music_sample = get_sample_with_sentiment(sentiment);
    // play_sample();
}













app.get('/', function(req, res) {
  res.render(index);
});


app.get('/auth', function(req, res) {
  ACCESS_TOKEN = req.query.access_token;
  res.redirect('/stream');
});

app.timeout = 0;
app.listen(process.env.PORT || 8080);
