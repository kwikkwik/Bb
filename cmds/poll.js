const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
if (!args) return message.reply("You must have something to vote for!")
    if (!message.content.includes("?")) return message.reply("Include a ? in your vote!")
        message.channel.send(`:ballot_box:  ${message.author.username} started a vote! React to my next message to vote on it. :ballot_box: `);
        const pollTopic = await message.channel.send(message.content.slice(5));
        await pollTopic.react(`✅`);
        await pollTopic.react(`⛔`);
        // Create a reaction collector
        const filter = (reaction) => reaction.emoji.name === '✅';
        const collector = pollTopic.createReactionCollector(filter, { time: 1 * 20000 });
        collector.on('collect', r => console.log(`Collected ${r.emoji.name}`));
        collector.on('end', collected => console.log(`Collected ${collected.size} items`));
};
