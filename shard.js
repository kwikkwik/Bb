const Discord = require('discord.js');
const Manager = new Discord.ShardingManager('./MusicBot.js');
Manager.spawn(5);
