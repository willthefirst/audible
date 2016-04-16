var express = require('express');

CLIENT_ID = 'amzn1.application-oa2-client.b4410251e2674ae09b17315f30a75947';
CLIENT_SECRET = '4677872c4c7ac6c19ffa305fea1dc8015a592fff2958ff89fa5ae55bbb56dbf3';

var app = express();
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render(index);
});

app.listen(process.env.PORT || 8080);
