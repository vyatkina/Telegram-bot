const { Telegraf } = require('telegraf');

const bot = new Telegraf('5766638838:AAHokwPSu0GbJpXFCJVqtg9_8rk5_gwF4Jo');


bot.start(ctx => ctx.reply('Приветствую! Я Бот и мои команды можно посмотреть отправив мне сообщение с текстом /help') ) // ответ бота на команду /start
bot.help(ctx => ctx.reply(`
   Не переживай, мне тут тоже ничего не понятно.
Пока есть только справка /help, но мы обязательно что-нибудь придумаем!`)) //ответ бота на команду /help

/*
bot.command('help', (ctx) => {
    ctx.reply(`
    Бот может здороваться на разных языках.
    Список поддерживаемых приветствий:
    - привет - русский
    - hello - английский
    - hola - испанский
    `)
});
*/

let helloRu = ['привет', 'Привет', 'Добрый день', 'Добрый вечер',  'добрый день', 'добрый вечер','Доброго дня', 'Здравствуйте', 'здравствуйте']

bot.hears(helloRu, (ctx) => ctx.reply('Приветствую!'));
bot.hears(['hi','hello', 'Hi','Hello'], (ctx) => ctx.reply('Hello!')); // bot.hears это обработчик конкретного текста, данном случае это - "hi"
bot.hears(['hola', 'Hola'], (ctx) => ctx.reply('Hola!'));

bot.on('text', (ctx) => ctx.reply(`И тебе ${ctx.update.message.text} `))

bot.on('sticker', (ctx) => ctx.reply('Отличный стикер')) //bot.on это обработчик введенного юзером сообщения, в данном случае он отслеживает стикер, можно использовать обработчик текста или голосового сообщения
bot.on('voice', (ctx) => ctx.reply('Какой чудный голос, не мне лучше написать'))
bot.on('document', (ctx) => ctx.reply('Это можно тут сохранить'))


// bot.launch() // запуск бота
bot.launch().then(() => console.log('Started'));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
/*
bot.use(async (ctx) => {
    await ctx.reply(JSON.stringify(ctx.update, null, 2));
});
*/
/*
bot.use(async (ctx) => {
    await ctx.reply(JSON.stringify(ctx.update, null, 2));
});

bot.launch().then(() => console.log('Started'));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
*/
/*
const middleware1 = (ctx, next) => {
    console.log('middleware1');
    next();
};
const middleware2 = (ctx, next) => {
    console.log('middleware2');
};
const middleware3 = (ctx, next) => {
    console.log('middleware3');
};

bot.use(middleware1);
bot.use(middleware2);
bot.use(middleware3);

bot.launch().then(() => console.log('Started'));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
*/