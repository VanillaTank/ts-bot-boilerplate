import TelegramBot from 'node-telegram-bot-api';
import * as dotenv from 'dotenv';
dotenv.config();

const TOKEN = process.env.TOKEN || ''; // get it from @BotFather

const bot = new TelegramBot(TOKEN, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Received your message');
});


