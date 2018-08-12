const fs = require('fs');
const Discord = require('discord.js');

exports.run = (client, message) => {
    if (message.author.id !== '335035386923581440' && message.author.id !== '465810389993783307') {
        return message.channel.send(`\`📛\` ${message.author} You don't have permissions to execute that command.`);
    }

    function clean(text) {
        if (typeof (text) === 'string') {
            return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
        }
        return text;
    }
    let args = message.content.split(' ').slice(1);
    let cont = message.content.split(' ').slice(1).join(' ');
    message.channel.send('Evaluating...').then(msg => {
        try {
            let code = args.join(' ');
            let evaled = eval(code);

            if (typeof evaled !== 'string') {
                evaled = require('util').inspect(evaled);
            }
            if (evaled.length > 2000) {
                try {
                    let evalcode1 = new Discord.RichEmbed()
            .setAuthor(`Eval by ${message.author.tag}`, message.author.avatarURL)
            .setDescription(`**:inbox_tray: Input:**\n\n\`\`\`js\n${cont}\`\`\``, true)
            .addField(`\u200b`, `**:outbox_tray: Output:**\n\n\`\`\`Output too long, logged to ${__dirname}\\eval.txt\`\`\``, true)
            .setColor("BLUE")
            .setFooter(`Node.js - Time taken: ${Date.now() - message.createdTimestamp} ms`, `https://images-ext-2.discordapp.net/eyJ1cmwiOiJodHRwczovL2Euc2FmZS5tb2UvVUJFVWwucG5nIn0.LbWCXwiUul3udoS7s20IJYW8xus`);
                    msg.edit({
                        embed: evalcode1
                    });
                    return fs.writeFile(`eval.txt`, `${clean(evaled)}`);
                } catch (err) {
                    let errorcode1 = new Discord.RichEmbed()
            .setAuthor(`Eval by ${message.author.tag}`, message.author.avatarURL)
            .setDescription(`**:inbox_tray: Input:**\n\n\`\`\`js\n${cont}\`\`\``, true)
            .addField(`\u200b`, `**:outbox_tray: Output:**\n\n\`\`\`js\nOutput too long, logged to ${__dirname}\\eval.txt\`\`\``, true)
            .setColor(0x00ccbe)
            .setFooter(`Node.js - Time taken: ${Date.now() - message.createdTimestamp} ms `, `https://images-ext-2.discordapp.net/eyJ1cmwiOiJodHRwczovL2Euc2FmZS5tb2UvVUJFVWwucG5nIn0.LbWCXwiUul3udoS7s20IJYW8xus`);
                    msg.edit({
                        embed: errorcode1
                    });
                    return fs.writeFile(`eval.txt`, `${clean(err)}`);
                }
            }
            let evalcode = new Discord.RichEmbed()
        .setAuthor(`Eval by ${message.author.tag}`, message.author.avatarURL)
        .setDescription(`**:inbox_tray: Input:**\n\n\`\`\`js\n${cont}\`\`\``, true)
        .addField(`\u200b`, `** :outbox_tray: Output:**\n\n\`\`\`js\n${clean(evaled)}\`\`\``, true)
        .setColor("GREEN")
        .setFooter(`Node.js - Time taken: ${Date.now() - message.createdTimestamp} ms`, `https://images-ext-2.discordapp.net/eyJ1cmwiOiJodHRwczovL2Euc2FmZS5tb2UvVUJFVWwucG5nIn0.LbWCXwiUul3udoS7s20IJYW8xus`);
            msg.edit({
                embed: evalcode
            }).catch(e => logger.error(e));
        } catch (err) {
            let errorcode = new Discord.RichEmbed()
        .setAuthor(`Eval by ${message.author.tag}`, message.author.avatarURL)
        .setDescription(`**:inbox_tray: Input:**\n\n\`\`\`js\n${cont}\`\`\``, true)
        .addField(`\u200b`, `**:outbox_tray: Output:**\`\`\`js\n${clean(err)}\`\`\``, true)
        .setColor("BLUE")
        .setFooter(`Node.js - Time taken: ${Date.now() - message.createdTimestamp} `, `https://images-ext-2.discordapp.net/eyJ1cmwiOiJodHRwczovL2Euc2FmZS5tb2UvVUJFVWwucG5nIn0.LbWCXwiUul3udoS7s20IJYW8xus`);
            msg.edit({
                embed: errorcode
            }).catch(e => logger.error(e));
        }
    });
};

module.exports.help = {
    name: 'eval'
};
