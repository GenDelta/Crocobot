const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'info',
    category: 'info',
    aliases: ['userinfo', 'user-info'],
    permissions: [],
    devOnly: false,
    description: 'Shows information about the user',
    run: async ({client, message, args}) => {
        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username}'s info`)
        .setColor(0x00AE86)
        .setThumbnail(message.author.avatarURL())
        .addField('Username', `${message.author.username}`, true)
        .addField('ID', `${message.author.id}`, true)
        .addField('Created At', `${message.author.createdAt}`, true)
        .addField('Joined At', `${message.member.joinedAt}`, true)
        .addField('Roles', `${message.member.roles.cache.map(r => r.name).join(' ')}`, true)
        .addField('Discriminator', `${message.author.discriminator}`, true)
        .addField('Avatar URL', `${message.author.avatarURL()}`, true)
        message.channel.send({ embeds: [embed] });
    }
}
