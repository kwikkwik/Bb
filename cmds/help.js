const Discord = require("discord.js")

module.exports.run = (bot, message, args, ops, PREFIX) => {

var option = args.slice(0).join(" ")
            if (option.match("test")) {
              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`
**COMMAND:**
- \`b!welcome set #channel\`
- \`b!welcome on\`
- \`b!welcome off\`

`)
              .setFooter("welcome", bot.user.displayAvatarURL)
              .setTimestamp()
              message.react("📜")
              message.channel.send({embed});
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
