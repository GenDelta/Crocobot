//write a command that displays the avatar of the mentioned user in an embed 
//and displays the avatar of the author in an embed if no one is tagged 
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "av",
    description: "Displays the avatar of the mentioned user in an embed and displays the avatar of the author in an embed if no one is tagged",
    usage: "av",
    aliases: ["avatar"],
    run: async ({client, message, args}) => {
        let user = message.mentions.users.first() || message.author
        const embed = new Discord.MessageEmbed()
            .setColor(0x00AE86)
            .setTitle(`${user.username}'s Avatar`)
            .setImage(user.displayAvatarURL())
            message.channel.send({ embeds: [embed] });
    }
}
