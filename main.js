var express = require('express');
var http = require('http');
var querystring = require('querystring');
var retext = require('retext');
var inspect = require('unist-util-inspect');
var sentiment = require('retext-sentiment');
var api = require('audible-api');
var ejs = require('ejs');


var app = express();
app.use(express.static('public'));

//////////////////
//options
//////////////////

var CLIENT_ID = 'amzn1.application-oa2-client.b4410251e2674ae09b17315f30a75947';
var CLIENT_SECRET = '4677872c4c7ac6c19ffa305fea1dc8015a592fff2958ff89fa5ae55bbb56dbf3';
var ACCESS_TOKEN = "figuremeout";

var  test_passage = "‘So do I,’ said Gandalf, ‘and so do all who live to see such times. But that is not for them to decide. All we have to decide is what to do with the time that is given us. And already, Frodo, our time is beginning to look black. The Enemy is fast becoming very strong. His plans are far from ripe, I think, but they are ripening. We shall be hard put to it. We should be very hard put to it, even if it were not for this dreadful chance."

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
    return array[Math.floor(Math.random()*array.length)];
}

// corpus of musical scores
// keyed by sentiment
var music_corpus = {
    '-5': [{ // can have multiple musical samples for each sentiment
        sample_id : 1,
        start_time: 1,
        end_time: 2,
    }],
    '-4': [{
        sample_id : 1,
        start_time: 1,
        end_time: 2,
    }],
    '-3': [{
        sample_id : 1,
        start_time: 1,
        end_time: 2,
    }],
    '-2': [{
        sample_id : 1,
        start_time: 1,
        end_time: 2,
    }],
    '-1': [{
        sample_id : 1,
        start_time: 1,
        end_time: 2,
    }],
    '0': [{
        sample_id : 1,
        start_time: 1,
        end_time: 2,
    }],
    '1': [{
        sample_id : 1,
        start_time: 1,
        end_time: 2,
    }],
    '2': [{
        sample_id : 1,
        start_time: 1,
        end_time: 2,
    }],
    '3': [{
        sample_id : 1,
        start_time: 1,
        end_time: 2,
    }],
    '4': [{
        sample_id : 1,
        start_time: 1,
        end_time: 2,
    }],
    '5': [{
        sample_id : 1,
        start_time: 1,
        end_time: 2,
    }],
};


var get_sample_with_sentiment = function(sentiment){
    var sample = get_random_from_array(music_corpus[sentiment]);
    return sample;
}


// sentiment analysis
// NLP coolness
var get_sentiment_of_audiobook_sample = function(audiobook_sample, callback){
    retext().use(sentiment).use(function () {
        return function (cst) {
            var polarity = cst.data.polarity;
            return callback(polarity);
            //console.log(inspect(cst));
        };
    }).process(
      audiobook_sample
    );
}


var play_music_with_audiobook_sample = function(audiobook_sample){
    get_sentiment_of_audiobook_sample(audiobook_sample, function(sentiment){
        var music_sample = get_sample_with_sentiment(sentiment);
        console.log(music_sample);
    });
}


app.get('/', function(req, ejs) {
    var context = {};

    // hard-coded test
    get_sentiment_of_audiobook_sample(test_passage, function(sentiment){
        var music_sample = get_sample_with_sentiment(sentiment);
        console.log(music_sample);
        context.music_sample = music_sample
    });

  ejs.render(index, context);
});


app.get('/auth', function(req, res) {
  ACCESS_TOKEN = req.query.access_token;
  console.log(typeof api);
  var _api = new api(ACCESS_TOKEN, CLIENT_ID);
  _api.getProductStream('B0099RKRTY');
  res.redirect('/stream');
});

app.timeout = 0;
app.listen(process.env.PORT || 8080);
