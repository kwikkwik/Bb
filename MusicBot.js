const Discord = require('discord.js');
const { PREFIX } = require('./config');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const DBL = require("dblapi.js");
const DBLAPI = process.env.DBL_TOKEN;
const fs = require("fs");
const configbot = require('./configbot.json')

const bot = new Discord.Client();
const client = new Discord.Client();

const dbl = new DBL(DBLAPI, client);

const YTAPI = process.env.GAK;
const youtube = new YouTube("AIzaSyCdv0yGMUc5SAA5KLcEinDLELQii5WsnHA");

const queue = new Map();

client.on("ready", () => {
    function randomStatus() {
        let status = [`${client.guilds.size} guilds.`, `${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} users.`, "b!help | Bolt", "bot.discord.io/bolt", "24/7 | Vote"]
          let rstatus = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[rstatus], {type: 'LISTENING'});
	}; setInterval(randomStatus, 30000)
	setInterval(() => {
        dbl.postStats(client.guilds.size);
    }, 1800000);
    console.log("Bot berhasil dinyalakan.");
});

client.on("guildCreate", guild => {
  console.log(`Invited bot to: ${guild.name}, owned by ${guild.owner.user.username}!`)
});

client.on("guildDelete", guild => {
  console.log(`Kicked from: ${guild.name}. RIP.`)
});

client.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));

client.on('reconnecting', () => console.log('I am reconnecting now!'));

client.on('message', async msg => { // eslint-disable-line

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if (!prefixes[msg.guild.id]) {
        prefixes[msg.guild.id] = {
            prefixes: configbot.prefix
        };
    }
    let prefix = prefixes[msg.guild.id].prefixes;

    if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;

    const args = msg.content.split(' ');
    const searchString = args.slice(1).join(' ');
    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
    const serverQueue = queue.get(msg.guild.id);

    let command = msg.content.toLowerCase().split(' ')[0];
    command = command.slice(prefix.length)
	
    // TAG ME IF YOU DON'T KNOW DA' PREFIX
    const ClientMention = new RegExp(`^<@!?${client.user.id}> help`);
    if (msg.content.match(ClientMention)) {
        return msg.reply(`My prefix is **b!** \nJust type **b!help** for all command list that i can run for you :)`);
    };
	
// Commands
	    if (command === 'stato') {
        return client.shard.broadcastEval('this.guilds.size')
            .then(results => {
                return msg.channel.send(`Server count: ${results.reduce((prev, val) => prev + val, 0)}`);
            })
            .catch(console.error);
    }
       if (command === 'changelog') {
	        let embed = new Discord.RichEmbed()
		.setTitle("Bolt Changelog | 27 May 2018")
		.setDescription("**[+] Added | [-] Removed | [*] Changed/Fixed** \n\n**[+]** Commands: `sayd` \n**[*]** Commands: `say` `sayembed`")
		.setFooter("© MasterBotTeam")
		.setColor('GREEN')
		.setTimestamp()
		
		return msg.channel.send(embed)
		};
       if (command === 'help') {
                let helpembed = new Discord.RichEmbed()
		.setThumbnail('https://cdn.discordapp.com/avatars/471150809196003328/a0ed47f2512655b5604a94e0cfb950ef.png?size=2048')
                .setTitle("Bolt Command List")
                .addField("Core", "`help`, `ping`, `invite`, `stats`, `info`, `setprefix`")
		.addField("Music", "`play`, `skip`, `stop`, `queue`, `pause`, `resume`, `volume`, `np`") 
		.addField("Soundboard", "`airhorn`  `clap`  `cena`  `duck`  `pip`  `sad`  `troll`  `trombone`")
		.addField("Utility", "`userinfo`, `serverinfo`, `avatar`, `weather`, `discrim`")
		.addField("Fun", "`8ball`, `say`, `sayd`, `sayembed`, `cleverbot`, `randommeme`")
		.addField("Reaction", "`pat`, `hug`")
		.addField("**Usefull Links**", "[Invite Me](https://bot.discord.io/bolt)")
		.setFooter(`Requested by: ${msg.author.tag} | © MasterBotTeam`)
		.setColor('GREEN')
                .setTimestamp()

                return msg.channel.send(helpembed)
        };
	if (command === 'weather') {
    const weather = require('weather-js');
    const city = msg.content.split(" ").slice(1).join(" ")
    if (!city) return msg.channel.send("**Error**\nYou did not include a city! Please include it so we can show the forecast!")

    weather.find({search: city, degreeType: 'C'}, function(err, result) {
        if (err) {
            msg.channel.send(":x: No results on that city :x:")
            console.log(err.stack)
            return;
        } 
        let url;
        if (result[0].current.skytext === "Mostly Sunny") url = "https://openclipart.org/image/2400px/svg_to_png/3367/ivak-Decorative-Sun.png"
        else if (result[0].current.skytext === "Mostly Cloudy" || result[0].current.skytext === "Cloudy") url = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Weather-heavy-overcast.svg/200px-Weather-heavy-overcast.svg.png"
        else if (result[0].current.skytext === "Partly Cloudy") url = "";
        var embed = new Discord.RichEmbed()
        .setTitle(`Forecast for ${result[0].location.name}`)
        .setColor("GREEN")
        .setThumbnail(result[0].current.imageUrl)
        .setTimestamp()
        .addField(":thermometer: Temperature :thermometer:", `**__${result[0].current.temperature}__ Degrees Celsius**`, true)
        .addField(":city_sunset: What it looks like outside :city_sunset:", `**__${result[0].current.skytext}__**`, true)
        .addField(":wind_blowing_face: Feels Like :wind_blowing_face:", `**__${result[0].current.feelslike}__ Degrees Celsius**`, true)
        .addField(":sweat: Humidity :sweat:", `**__${result[0].current.humidity}%__**`, true)
        .addField(":wind_blowing_face: Wind Speed :wind_blowing_face:", `**__${result[0].current.windspeed.replace("mph", "Miles Per Hour")}__**`, true)
        .setFooter("© MasterBotTeam")
        msg.channel.send({ embed: embed })
})};
	if (command === '8ball') {
		var tanyas = [':8ball: Absolutely.', ':8ball: Absolutely not.', ':8ball: It is true.', ':8ball: Impossible.', ':8ball: Of course.', ':8ball: I do not think so.', ':8ball: It is true.', ':8ball: It is not true.', ':8ball: I am very undoubtful of that.',':8ball: I am very doubtful of that.', ':8ball: Sources point to no.', ':8ball: Theories prove it.', ':8ball: Reply hazy try again', ':8ball: Ask again later', ':8ball: Better not tell you now', ':8ball: Cannot predict now', ':8ball: Concentrate and ask again'];
        const embed = new Discord.RichEmbed()
        .setDescription(tanyas[Math.floor(Math.random() * tanyas.length)])
        .setColor("GREEN")

        msg.channel.send({embed});
}
	if (command === 'say') {
		        let embedarg = args.slice(1).join(' ')

            msg.channel.send(`${embedarg}`)
  
}
if (command === 'sayd') {
	
	          if (!msg.member.hasPermission('MANAGE_MESSAGES')) {
            return msg.reply("No **Manage Messages** permissions. We can't do that.")
        }
	
        let embedarg = args.slice(1).join(' ')
        msg.delete()

            msg.channel.send(`${embedarg}`)
  
}
if (command === 'sayembed') {
	        let embedarg = args.slice(1).join(' ')
        msg.delete();
let embed = new Discord.RichEmbed()
  
            .setDescription(`${embedarg}`)
            .setColor("GREEN")

            msg.channel.send({embed})
  
}
if (command === 'ping') {
        let start = msg.createdTimestamp; //seharusnya gak pake () :v 
        let diff = (Date.now() - start); 
        let API = (client.ping).toFixed(2)
        let embed = new Discord.RichEmbed()
	.setColor("GREEN")
        .setTitle("🏓 Pong!")
        .addField("Latency", `${diff}ms`, true)
        .addField("API", `${API}ms`, true)
        msg.channel.send(embed);
};
	if (command === 'invite') {
		let inviteembed = new Discord.RichEmbed()
		
		.setColor("GREEN")
		.addField("Invite Bolt", "[The Link](https://bot.discord.io/bolt)", true)
		.setThumbnail("https://cdn.discordapp.com/avatars/471150809196003328/a0ed47f2512655b5604a94e0cfb950ef.png?size=2048")
                .setFooter("© MasterBotTeam")
		
		return msg.channel.send(inviteembed)
	};
	if (command === 'stats') {
	const Discord = require("discord.js")
    const moment = require('moment');
    const _fs = require("fs");
    const packages = JSON.parse(_fs.readFileSync('./package.json', 'utf-8'));
    require('moment-duration-format');
    const os = require('os'); 
    let cpu = os.cpus();
		
      const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
      const servers = client.guilds.size
      const client_channel = client.guilds.reduce((a, b) => a + b.channels.size, 0).toLocaleString()

      const owner = packages.author
      const idowner = packages.idauthor
      const shardall = client.shard.count

      const ccpu = process.cpuUsage().system / 1024 / 1024;

      const users = client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()
      const nodever = process.version
      const memory_on_bot = (process.memoryUsage().rss / 1024 / 1024).toFixed(2)

        const statembed = new Discord.RichEmbed()
        .setColor(0xff2f2f)
        .setDescription("📊 Bolt Stats")
        .setFooter(`Bolt | ${shardall} Shard`)
        .setTimestamp()
        
        .addField("Bot Uptime:", `• ${duration}`, true)
        .addField("Memory Usage:", `• ${memory_on_bot} MB`, true)
        .addField("Advanced Stats:", `• ${servers} Servers \n• ${users} Users \n• ${client_channel} Channels`, true)
        .addField("Bot Informations:", `• Bot Developer: ${owner} \n• Bot Version: ${packages.version}`, true)
        .addField("CPU Usage:", `• ${Math.round(ccpu * 100) / 100}%`, true)
	
	.addField("Usefull Links", "[Invite Me](https://bot.discord.io/Bolt)")

        msg.channel.send(statembed);	
	};
	if (command === 'eval') {
    if (msg.author.id !== '335035386923581440') return;
    try {
        let codein = args.slice(1).join(' ');
        let code = eval(codein);

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setAuthor('Evaluate')
        .setColor('GREEN')
        .addField(':inbox_tray: Input', `\`\`\`js\n${codein}\`\`\``)
        .addField(':outbox_tray: Output', `\`\`\`js\n${code}\n\`\`\``)
        msg.channel.send(embed)
    } catch(e) {
        msg.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
};
	if (command === 'avatar') {
    let user = msg.mentions.users.first();
    let author = msg.author;
    
    user = user ? user : author;
    let uEmbed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setImage(user.displayAvatarURL)
    .setDescription(`[${msg.author} Avatar](${user.displayAvatarURL})`);

    msg.channel.send(uEmbed);
    
};
	if (command === 'serverinfo') {
    let sicon       = msg.guild.iconURL;
    let serverEmbed = new Discord.RichEmbed()
        .setDescription("**Server Information**")
        .setColor("GREEN")
        .setThumbnail(sicon)
        .addField("Server Name", msg.guild.name)
        .addField("Created At", msg.guild.createdAt)
        .addField("You joined At", msg.guild.joinedAt)
        .addField("Server Owner", msg.guild.owner)
        .addField("Total Members", msg.guild.memberCount);

    msg.channel.send(serverEmbed);
};
	if (command === 'userinfo') {
    let user = msg.mentions.users.first();
    let author = msg.author;

    let status = {
        online: "Online",
        idle: "Idle",
        dnd: "Do Not Disturb",
        offline: " Offline"
    }
    
    user = user ? user : author;
    let uEmbed = new Discord.RichEmbed()
    .setAuthor(`${user.username}'s Info`, user.displayAvatarURL)
    .setThumbnail(user.displayAvatarURL)
    .setColor("YELLOW")
    .addField("ID", user.id, true)
    .addField("Username", user.username, true)
    .addField("Status", status[user.presence.status], true)
    .addField("Bot ?", user.bot ? `Yup \:robot\:` : `Nope`, true);

    msg.channel.send(uEmbed);
    
}
	if (command === 'play' || command === 'p') {
		if (!args[1]) return msg.reply(`Usage: **${prefix}play** <Song | URL | Playlist URL>.`);
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return msg.channel.send(`✅ Playlist: **${playlist.title}** has been added to the queue!`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
                                        let selectembed = new Discord.RichEmbed()
					
					.setTitle("Song Selection")
					.setColor("GREEN")
					.setDescription(`${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}`)
					.setFooter("Please provide a value to select one of the search results ranging from 1-10.")
					
					msg.channel.send(selectembed)
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('No or invalid value entered, cancelling video selection.');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send('🆘 I could not obtain any search results.');
				}
			}
			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === 'skip' || command === 's') {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('There is nothing playing that I could skip for you.');
		serverQueue.connection.dispatcher.end('Skip command has been used!');
		return undefined;
	} else if (command === 'stop' || command === 'st') {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('There is nothing playing that I could stop for you.');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Stop command has been used!');
		return undefined;
	} else if (command === 'volume' || command === 'v') {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		if (!args[1]) return msg.channel.send(`The current volume is: **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 100);
		return msg.channel.send(`I set the volume to: **${args[1]}**`);
	} else if (command === 'np') {
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		let nowembed = new Discord.RichEmbed()
		
		.setColor("GREEN")
		.setDescription(`🎶 Now playing: **${serverQueue.songs[0].title}**`)
		
		return msg.channel.send(nowembed);
	} else if (command === 'queue' || command === 'q') {
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		let queueembed = new Discord.RichEmbed()
		
		.setTitle("Song Queue")
		.setColor("GREEN")
		.setDescription(`${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}`)
		.addField("Now Playing", `${serverQueue.songs[0].title}`)
		
		return msg.channel.send(queueembed)
	} else if (command === 'pause' || command === 'ps') {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('⏸ Paused the music for you!');
		}
		return msg.channel.send('There is nothing playing.');
	} else if (command === 'resume' || command === 're') {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('▶ Resumed the music for you!');
		}
		return msg.channel.send('There is nothing playing.');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	const song = {
		id: video.id,
		title: Discord.Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`,
		durationh: video.duration.hours,
		durationm: video.duration.minutes,
		durations: video.duration.seconds,
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 50,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`I could not join the voice channel: ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		let qaddembed = new Discord.RichEmbed()
		
  .setColor("GREEN")
  .setAuthor(`Added to Queue`, `https://images-ext-1.discordapp.net/external/YwuJ9J-4k1AUUv7bj8OMqVQNz1XrJncu4j8q-o7Cw5M/http/icons.iconarchive.com/icons/dakirby309/simply-styled/256/YouTube-icon.png`)
  .setThumbnail(`https://i.ytimg.com/vi/${song.id}/default.jpg?width=80&height=60`)
  .addField('Title', `__[${song.title}](${song.url})__`, true)
  .addField('Video ID', `${song.id}`, true)
  .addField("Duration", `${song.durationh}Hours ${song.durationm}Minutes ${song.durations}Seconds`, true)
  .setTimestamp();
		
	        return msg.channel.send(qaddembed);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 50);

	
	let splayembed = new Discord.RichEmbed()
	
  .setColor("GREEN")
  .setAuthor(`Start Playing`, `https://images-ext-1.discordapp.net/external/YwuJ9J-4k1AUUv7bj8OMqVQNz1XrJncu4j8q-o7Cw5M/http/icons.iconarchive.com/icons/dakirby309/simply-styled/256/YouTube-icon.png`)
  .setThumbnail(`https://i.ytimg.com/vi/${song.id}/default.jpg?width=80&height=60`)
  .addField('Title', `__[${song.title}](${song.url})__`, true)
  .addField('Video ID', `${song.id}`, true)
  .addField("Duration", `${song.durationh}Hours ${song.durationm}Minutes ${song.durations}Seconds`, true)
  .addField("Volume", `${serverQueue.volume}%`, true)
  .setFooter("If you can't hear the music, please reconect. If you still don't hear it, maybe the bot is restarting!")
  .setTimestamp();
	
	return serverQueue.textChannel.send(splayembed);
}
// Listener Events
client.on('message', message => {
  
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if (!prefixes[message.guild.id]) {
        prefixes[message.guild.id] = {
            prefixes: configbot.prefix
        };
    }
    let prefix = prefixes[message.guild.id].prefixes;
    let msg = message.content.toLowerCase();
    let sender = message.author;
    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();
  
    if (sender.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if (message.channel.type === 'dm') return;

    try {
        let commandFile = require(`./cmds/${cmd}.js`);
        commandFile.run(client, message, args);
    } catch(e) {
        console.log(e.message);
    } finally {
        console.log(`${message.author.username} Telah Menggunakan Command: ${cmd}`);
    }
});


client.login(process.env.TOKEN);
