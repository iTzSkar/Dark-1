const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});

client.on('guildMemberAdd', member => {
    var channel = member.guild.channels.find('id','480104765192273935')
    message.channel.send('** __Welcome To Server Bello__ **')
	if (!channel) return;
}, 3000);

client.login(process.env.BOT_TOKEN);
