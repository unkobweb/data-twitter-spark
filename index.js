const net = require('net');
const Twitter = require('twitter');
require('dotenv').config();
 
const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});
 
const params = {screen_name: 'nodejs'};

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const server = net.createServer(function(c) { //'connection' listener
  console.log('server connected');
  c.on('end', function() {
    console.log('server disconnected');
  });
  client.get('statuses/user_timeline', params, async function(error, tweets, response) {
    if (!error) {
      for (const tweet of tweets) {
        c.write(tweet.text + '\r\n');
        c.pipe(c);
        await wait(1500);
      }
    }
  });
});
server.listen(9999, function() { //'listening' listener
  console.log('server bound');
});