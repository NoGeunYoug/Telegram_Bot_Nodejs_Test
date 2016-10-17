var TelegramBot = require('node-telegram-bot-api');
var token = '238857665:AAGE2Axe3w8ygb4J8i3V4xOLjQ5hTITh9oY';

var bot = new TelegramBot(token, {polling: true});
bot.getMe().then(function (me) {
  console.log('Hi my name is %s!', me.username);
  console.log('Hi my id is %s!', me.id);
});

//matches /start
bot.onText(/\/start/, function (msg, match) {
  var fromId = msg.from.id; // get the id, of who is sending the message
  var message = "Welcome to your WeatherBot\n"
  message += "Get weather update by sending /weather [your_city] command."
  bot.sendMessage(fromId, message);
});

//match /weather [whatever]
bot.onText(/\/weather (.+)/, function (msg, match) {
  var fromId = msg.from.id; // get the id, of who is sending the message
  var postcode = match[1];
  var message = "We will look for weather on postcode "+postcode;
  bot.sendMessage(fromId, message);
});
