//http://picoledelimao.github.io/blog/2016/01/22/creating-a-telegram-bot-in-nodejs/

var TelegramBot = require('node-telegram-bot-api');

var token = '238857665:AAGE2Axe3w8ygb4J8i3V4xOLjQ5hTITh9oY';
// Setup polling way
var bot = new TelegramBot(token, {polling: true});

// Matches /echo [whatever]
bot.onText(/\/echo (.+)/, function (msg, match) {
  var fromId = msg.from.id;
  var resp = match[1];
  bot.sendMessage(fromId, resp);
});

// Any kind of message
bot.on('message', function (msg) {
  var chatId = msg.chat.id;
  // photo can be: a file path, a stream or a Telegram file_id
  var photo = 'cats.png';
  bot.sendPhoto(chatId, photo, {caption: 'Lovely kittens'});
});
