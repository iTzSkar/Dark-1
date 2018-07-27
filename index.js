const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Savage.");
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**
قد تكون نهاية اشياء بداية لأشياء أجمل :sparkles:..# 
https://discord.gg/NkV44a4 **`) 

}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
