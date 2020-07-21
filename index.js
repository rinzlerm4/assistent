const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NzM1MDE0NzY3NDQ5ODY2MzAx.XxaQcA.B3FQcnsNU2lbn643jsPiSCeDM6A';
const prefix = '+';

bot.on('ready', () => {
    console.log('YOUR BOT IS NOW ONLINE.');
    bot.user.setActivity('M4 COMMUNITY', { type: 'WATCHING' })
    .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
    .catch(console.error);
    bot.user.setStatus('DND')
    .then(console.log)
    .catch(console.error);
})

bot.on('message', message => {
    // If the message is "ping"
    if (message.content === 'ping') {
      // Send "pong" to the same channel
      message.channel.send('pong');
}})

bot.login(token)