const { Client, Intents } = require("discord.js"); 
const botConfig = require("./botConfig.json"); 

const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once("ready", () => {

  console.log(`${client.user.username} is online.`);
  client.user.setActivity("!help", { type: "PLAYING" });

}); 

client.on("messageCreate", message => {

  if (message.author.bot) return; 

  var prefix = botConfig.prefix;

  var messageArray = message.content.split(" "); 

  var command = messageArray[0];

  if (command == `${prefix}salawat`) {
    return message.channel.send("Allahuma Salli Ala Muhammad wa Aali Muhammad")
  }



    if (message.author.bot) return; 
  
    var prefix = botConfig.prefix;
  
    var messageArray = message.content.split(" "); 
  
    var command = messageArray[0];

    if (command == `${prefix}salam`) {
      return message.channel.send("as-Salamu 'alaykum wa Rahmatullahi wa Barakatuh.")
    }

    

      if (message.author.bot) return; 
    
      var prefix = botConfig.prefix;
    
      var messageArray = message.content.split(" "); 
    
      var command = messageArray[0];
  
      if (command == `${prefix}wsalam`) {
        return message.channel.send("Wa 'Alaykum as-Salam wa Rahmatullahi wa Barakatuh.")
      }




})

bot.login(process.env.token);