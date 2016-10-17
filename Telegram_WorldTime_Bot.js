
var TelegramBot = require('node-telegram-bot-api'); // node-telegram-bot / api 받기
var token = '238857665:AAGE2Axe3w8ygb4J8i3V4xOLjQ5hTITh9oY'; // TelegramBot Token 지정
var bot = new TelegramBot(token, {polling: true}); // Token에 맞는 Bot 지정

var moment = require('moment-timezone'); // moment-timezone / api 받기

var time_format = 'YYYY년 MM월 DD일 HH:mm:ss'; // 시간 출력 포멧 지정

var korea_time = moment().tz("Asia/Seoul").format(time_format); // 한국 시간
var quebec_time = moment().tz("America/Montreal").format(time_format); // 퀘백 시간

var date = new Date();

console.log('날짜는 ',date);
console.log('utc 날짜는 ',date.toUTCString());
console.log(date.toLocaleString('ko-KR'));
console.log('moment ',moment().tz("America/Montreal").format(time_format)); // Quebec과 같음


//matches /korea
bot.onText(/(\/korea)|(\/한국(.*))/, function (msg, match) {
  var fromId = msg.from.id; // get the id, of who is sending the message
  var message = "한국 시간은 \n"
  message += korea_time
  bot.sendMessage(fromId, message);
});

//matches /korea
bot.onText(/\/quebec/, function (msg, match) {
  var fromId = msg.from.id; // get the id, of who is sending the message
  var message = "캐나다 시간은 \n"
  message += quebec_time
  bot.sendMessage(fromId, message);
});
