const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Twitter = require('twitter');
require('dotenv').config();
const cors = require('cors');

const app = express();

const port = 3000;

let _tweets = [];

app.use(express.static(path.join(__dirname, 'dist/TwitterFeedsPage')));

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use(cors());

// const api = require('./Server/Routes/api');

// app.use('/api', api);

var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    bearer_token: process.env.TWITTER_BEARER_TOKEN
  });

// client.get('search/tweets', {q:'IPL', count: 1}, (req, res, tweets) => {  
//     _tweets = tweets.statuses;
//     console.log(_tweets);
// });  

app.get('', (req,res) => {
    res.sendFile(path.join(__dirname, 'dist/TwitterFeedsPage/index.html'));  
})

app.get('/home', (req,res) => {
    client.get('search/tweets', {q:'IPL', count: 100}, (error, tweets, response) => { 
        if(error) {
            res.send(error);
        } 
        // _tweets = tweets.statuses;
        // console.log(_tweets);
        res.send(tweets.statuses);
    });
    }
)

app.listen(port, () => {
    console.log('Server is running on localhost : '+port);
})

// client.get('search/tweets', {q: 'IPL'}, function(error, tweets, response) {
//     console.log(tweets);
//  });



