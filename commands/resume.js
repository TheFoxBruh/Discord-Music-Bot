const Discord = require("discord.js");
const {
    Player
} = require("discord-player");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES", "ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("You don't have permissions"));

    if (!message.member.voice.channel) return message.channel.send(new Discord.MessageEmbed().setDescription(`You're not in a voice channel`).setColor("RED"));
    
    if (!bot.player.isPlaying(message.guild.id)) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`There's no music playing in this server`));

    const song = await bot.player.resume(message.guild.id);

    if(!song) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`There's no music playing in this server`));

    message.channel.send(new Discord.MessageEmbed().setDescription(`[${song.name}](${song.url}) has been resumed`).setColor("GREEN"));
}

module.exports.config = {
    name: "resume",
    aliases: [],
    description: ''
}