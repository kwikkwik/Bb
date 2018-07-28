const Discord = require('discord.js')

exports.run = (client, message, args, tools) => {

    var images = [ "https://media.giphy.com/media/1BXa2alBjrCXC/giphy.gif",
    "https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif",
    "https://media.giphy.com/media/k61nOBRRBMxva/giphy.gif",
    "https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif",
    "https://media.giphy.com/media/10tIjpzIu8fe0/giphy.gif",
    "https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif",
    "https://media.giphy.com/media/6Q3M4BIK0lX44/giphy.gif",
    "https://media.giphy.com/media/2Qs2hKWMvEzdu/giphy.gif",
    "https://media.giphy.com/media/Ph8OWoJA2M3eM/giphy.gif",
    "https://media.giphy.com/media/8ykJ4yAnwgK2I/giphy.gif",
    "https://media.giphy.com/media/3o6wrvdHFbwBrUFenu/giphy.gif",
    "https://media.giphy.com/media/l3q2RauzE5Vzf7iYo/giphy.gif",
    "https://media.giphy.com/media/wViS9n0RqN2/giphy.gif",
    "https://media.giphy.com/media/3fmRTfVIKMRiM/giphy.gif",
    "https://media.giphy.com/media/9Jvj3vYjgmqH4AJTkx/giphy.gif",
    "https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif",
    "https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif",];
    var rand = Math.floor(Math.random() * images.length);
    var randomImage = images[rand];

    const patEmb = new Discord.RichEmbed()
        .setColor('GREEN')
        .setImage(randomImage);
    const sadEmb = new Discord.RichEmbed()
        .setColor('GREEN')
        .setImage('https://media.giphy.com/media/Y4z9olnoVl5QI/giphy.gif');
    if (!args[0]) {
        message.channel.send(`<@${message.author.id}> Crying alone...`, {
            embed: sadEmb
        });
        return;
    }

    if (!message.mentions.users.first()) return message.channel.send(`Please mention someone!`).then(msg => {
        msg.delete(3000)
    });
    message.channel.send(`<@${message.author.id}> Make ${args[0]} Crying...`, {
        embed: patEmb
    });


}

module.exports.help = {
    name: "cry"
}
