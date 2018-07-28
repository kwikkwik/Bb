const Discord = require('discord.js')

exports.run = (client, message, args, tools) => {

    var images = ["https://i.imgur.com/3aX4Qq2.gif", "https://i.imgur.com/eKcWCgS.gif", "https://i.imgur.com/MzAjNdv.gif", "https://i.imgur.com/aypxaOB.gif", "https://i.imgur.com/JZLaOA2.gif", "https://i.imgur.com/2QwD7M0.gif", "https://i.imgur.com/JnheKgG.gif", "https://i.imgur.com/AGfaBJD.gif", "https://i.imgur.com/BUJZGzg.gif", "https://i.imgur.com/w1AmQF7.gif", "https://i.imgur.com/PKOsDVW.gif",         "http://cdn.smosh.com/wp-content/uploads/ftpuploads/bloguploads/awkward-kiss-little-girl.gif",
        "https://media1.tenor.com/images/9c92434bdeea2df04d67710f338b212d/tenor.gif?itemid=5223535",
        "https://vignette.wikia.nocookie.net/degrassi/images/1/1d/Dair_kissing_.gif/revision/latest?cb=20150429211626",
        "https://media.giphy.com/media/xT9IgFh732bmm00u1a/giphy.gif",
        "https://media.giphy.com/media/10wwy1cJ8j2aD6/giphy.gif",
        "https://media.giphy.com/media/Nydo55HzhyGqI/giphy.gif",
        "http://cdn.smosh.com/wp-content/uploads/ftpuploads/bloguploads/awkward-kiss-little-girl.gif",
        "https://media1.tenor.com/images/9c92434bdeea2df04d67710f338b212d/tenor.gif?itemid=5223535",
        "https://vignette.wikia.nocookie.net/degrassi/images/1/1d/Dair_kissing_.gif/revision/latest?cb=20150429211626",
        "https://media.giphy.com/media/xT9IgFh732bmm00u1a/giphy.gif",
        "https://media.giphy.com/media/10wwy1cJ8j2aD6/giphy.gif",
        "https://media.giphy.com/media/Nydo55HzhyGqI/giphy.gif",
        "https://media.giphy.com/media/3og0IvIXD1UrcEvNmw/giphy.gif",
        "https://media.giphy.com/media/3og0IvIXD1UrcEvNmw/giphy.gif",];
    var rand = Math.floor(Math.random() * images.length);
    var randomImage = images[rand];

    const patEmb = new Discord.RichEmbed()
        .setColor('GREEN')
        .setImage(randomImage);
    const sadEmb = new Discord.RichEmbed()
        .setColor('GREEN')
        .setImage('https://media.giphy.com/media/Y4z9olnoVl5QI/giphy.gif');
    if (!args[0]) {
        message.channel.send(`<@${message.author.id}> kissed <@${message.author.id}>.. Lonely forever.`, {
            embed: sadEmb
        });
        return;
    }

    if (!message.mentions.users.first()) return message.channel.send(`Please mention someone!`).then(msg => {
        msg.delete(3000)
    });
    message.channel.send(`<@${message.author.id}> kissed ${args[0]}`, {
        embed: patEmb
    });


}

module.exports.help = {
    name: "kiss"
}
