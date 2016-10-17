// echoreply.js

var TelegramBot = require('node-telegram-bot-api');
var token = '238857665:AAGE2Axe3w8ygb4J8i3V4xOLjQ5hTITh9oY';
var bot = new TelegramBot(token, {polling: true});

bot.getMe().then(function (me) {
  console.log(me.username, '와 연결됨');
});

var d = new Date();
console.log('날짜는 ',d);


bot.on('message', function (msg) {:

  bot.sendMessage(msg.chat.id, new Date());
});
