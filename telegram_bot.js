
var TelegramBot = require('node-telegram-bot-api');
var USER = '238857665';
var token = '238857665:AAGE2Axe3w8ygb4J8i3V4xOLjQ5hTITh9oY';
// Setup polling way
var bot = new TelegramBot(token, {polling: true});

bot.getMe().then(function (me) {
  console.log('Hi my name is %s!', me.username);

});

/*
bot.onText(/\/start/, function (msg, match) {
  var fromId = msg.from.id; // get the id, of who is sending the message
  var message = "Welcome to your WeatherBot\n"
  message += "Get weather update by sending /weather [your_city] command."

  console.log(fromId);
  bot.sendMessage(fromId, message);
});

// Matches /echo [whatever]
bot.onText(/\/echo (.*)/, function (msg, match) {
  var fromId = msg.from.id;
  console.log(fromId);
  var resp = match[1];

  console.log('match 는 ',match);
console.log('match[0] 는 ',match[0]);
  console.log('resp 는 ',resp);


  bot.sendMessage(fromId, resp);
});

*/


// Any kind of message
bot.on('message', function (msg) {
  var chatId = msg.chat.id;
  console.log('chatId 는 ',chatId);
  console.log('text 는 ',msg.text);

  bot.sendMessage(chatId, msg.text);
  // photo can be: a file path, a stream or a Telegram file_id
  //var resp = match[1];
  //console.log('resp 는 ',resp);
//  var photo = 'cats.png';
//  bot.sendPhoto(chatId, photo, {caption: 'Lovely kittens'});
});
