const Discord = require("discord.js")

module.exports.run = (bot, message, args, ops, PREFIX) => {

var option = args.slice(0).join(" ")
            if (!option) {
                var helpembed = new Discord.RichEmbed()
		.setThumbnail('https://media.giphy.com/media/lYibYdyfaJzxW5tW4s/giphy.gif')
		.setDescription("**Type b!help <command>**")
                .setTitle("Bolt Command List")
                .addField("Core", "`bugreport`, `dev`, `help`, `ping`, `invite`, `stats`, `info`, `vote`")
		.addField("Music", "`join`, `leave`, `|p`, `skip|s`, `stop|st`, `queue|q`, `pause|ps`, `resume|re`, `volume|v`, `nowplaying|np`") 
		.addField("Soundboard", "`airhorn`,  `clap`,  `cena`,  `duck`,  `pip`, `sad`,  `troll`,  `trombone`")
		.addField("Economy", "`balance`, `coins`, `daily`, `level`, `profile`, `rep`, `+rep`, `-rep`")
		.addField("Utility", "`avatar`, `cinvite`, `discrim`, `fortnite`, `google`, `invitelist`, `listinvite`, `listemoji`, `math`, `mcuser`, `mcstats`, `npm`, `poll`, `report`, `serverinfo`, `sgif`, `shorten`, `timer`, `translate`, `userinfo`, `urban`, `warn`, `weather`")
		.addField("Fun", "`8ball`, `animememe`, `ask`, `ascii`, `beautiful`, `cmm`, `emojify`, `flip`, `joke`, `lucknumber`, `mcsay`, `meme`, `osu`, `rolldice`, `rps`, `say`, `sayd`, `sayembed`, `ship`, `slot`, `cleverbot`, `randommeme`")
		.addField("Image", "`beautiful`, `bunny`, `cat`, `dog`, `gif`, `givecandy`, `img`, `imgur`, `pat`, `hug`, `kiss`, `cry`, `slap`, `twice`")
		.addField("Administration", "`addrole`, `announce`, `autoroles`, `autonick`, `ban`, `kick`, `mute`, `prune|purge`, `removerole`, `sayd`, `setprefix`, `tempmute`, `welcome`")
		.addField("**Usefull Links**", "[Invite Me](https://bot.discord.io/bolt) | [Vote](https://discordbots.org/bot/471150809196003328/vote)")
		.setFooter(`Requested by: ${message.author.tag} | © MasterBotTeam`)
		.setColor('GREEN')
                .setTimestamp()

              message.react("📜")
              message.channel.send(helpembed);
            } else {
              if (option.match("welcome")) {
                              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`
**COMMAND:**
- \`b!welcome set #channel\`
- \`b!welcome on\`
- \`b!welcome off\`
**USAGE**
- \`b!welcome set #welcome-goodbye\`
- \`b!welcome on\`

`)
              .setFooter("welcome", bot.user.displayAvatarURL)
              .setTimestamp()
              message.react("📜")
              message.channel.send({embed});
            }
                
}
  {
              if (option.match("kiss")) {
                              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`
**COMMAND:**
- \`b!kiss @mention\`
- \`b!kiss on\`
**USAGE**
- \`b!kiss @user\`

`)
              .setFooter("Help Kiss", bot.user.displayAvatarURL)
              .setTimestamp()
              message.react("📜")
              message.channel.send({embed});
            }
                
}
    {
              if (option.match("autoroles")) {
                              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`
**COMMAND:**
- \`b!autoroles [role]\`
- \`b!autoroles on/of\`
**USAGE**
- \`b!autoroles Member\`
- \`b!autoroles on\`

`)
              .setFooter("Help Autoroles", bot.user.displayAvatarURL)
              .setTimestamp()
              message.react("📜")
              message.channel.send({embed});
            }
                
}
    {
              if (option.match("addrole")) {
                              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`
**COMMAND:**
- \`b!addrole @mention [role]\`
**usage**
- \`b!addrole @user Member\`

`)
              .setFooter("Help addrole", bot.user.displayAvatarURL)
              .setTimestamp()
              message.react("📜")
              message.channel.send({embed});
            }
                
}
    {
              if (option.match("removerole")) {
                              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`
**COMMAND:**
- \`b!removerole @mention [role]\`
**USAGE**
- \`b!removerole @user Member\`

`)
              .setFooter("Help Removerole", bot.user.displayAvatarURL)
              .setTimestamp()
              message.react("📜")
              message.channel.send({embed});
            }
                
}
    {
              if (option.match("autonick")) {
                              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`
**COMMAND:**
- \`b!autonick <text>\`
- \`b!autonick on\off\`
**USAGE**
- \`b!autonick [+] {username}\`
- \`b!autonick on\`

`)
              .setFooter("Help Autonick", bot.user.displayAvatarURL)
              .setTimestamp()
              message.react("📜")
              message.channel.send({embed});
            }
                
}
    {
              if (option.match("ban")) {
                              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`
**COMMAND:**
- \`b!ban [@mention] [Reason]\`
**USAGE**
- \`b!ban @user Test\`

`)
              .setFooter("Help Ban", bot.user.displayAvatarURL)
              .setTimestamp()
              message.react("📜")
              message.channel.send({embed});
            }
                
}
    {
              if (option.match("tempmute")) {
                              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`
**COMMAND:**
- \`b!tempmute @mention <Days/Hours/Minutes/Seconds>\`
**USAGE**
- \`b!tempmute @user 1h\`

`)
              .setFooter("Help TempMute", bot.user.displayAvatarURL)
              .setTimestamp()
              message.react("📜")
              message.channel.send({embed});
            }
                
}
      {
              if (option.match("mute")) {
                              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`
**COMMAND:**
- \`b!mute @mention\`
**USAGE**
- \`b!mute @user\`

`)
              .setFooter("Help Mute", bot.user.displayAvatarURL)
              .setTimestamp()
              message.react("📜")
              message.channel.send({embed});
            }
                
}
      {
              if (option.match("kick")) {
                              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`
**COMMAND:**
- \`b!kick @mention [reason]\`
**USAGE**
- \`b!tempmute @user bad words\`

`)
              .setFooter("Help Kick", bot.user.displayAvatarURL)
              .setTimestamp()
              message.react("📜")
              message.channel.send({embed});
            }
                
}
      {
              if (option.match("setprefix")) {
                              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`
**COMMAND:**
- \`b!setprefix [new prefix]\`
**USAGE**
- \`b!setprefix b$\`

`)
              .setFooter("Help SetPrefix", bot.user.displayAvatarURL)
              .setTimestamp()
              message.react("📜")
              message.channel.send({embed});
            }
                
}
      {
              if (option.match("announce")) {
                              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`
**COMMAND:**
- \`b!announce <text>\`
**USAGE**
- \`b!announce Hello i'm Bolt\`
**NOTE**
\`Required\`
- Roles: [Owner, Co-Owner]
- Channel: [announcements]

`)
              .setFooter("Help Announce", bot.user.displayAvatarURL)
              .setTimestamp()
              message.react("📜")
              message.channel.send({embed});
            }
                
}
}
